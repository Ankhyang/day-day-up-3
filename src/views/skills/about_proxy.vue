<template>
    <div class="wrapper">
        <a-card title="增强型数组" class="card" bodyStyle="text-align: left;">
            <p>arr[-1]: {{data1}}</p>
            <p>arr[2, 4]: {{data2}}</p>
            <p>arr[2, -2, 1]: {{data3}}</p>
            <p>arr["2:4"]: {{data4}}</p>
            <p>arr["-2:3"]: {{data5}}</p>
        </a-card>
        <a-card title="增强型对象" class="card" bodyStyle="text-align: left;">
            <p>user: {
                    name: "阿宝哥",
                    settings: {
                        theme: "dark"
                    }
                }
            </p>
            data.theme: {{data6}}
        </a-card>
        <a-card title="创建只读对象" class="card" bodyStyle="text-align: left;">
            <p>{{proxy.name}}</p>
        </a-card>
        <a-card title="拦截方法调用" class="card" bodyStyle="text-align: left;">
            
        </a-card>
        <a-card title="验证属性值" class="card" bodyStyle="text-align: left;">
            
        </a-card>
        <a-card title="toRef测试" class="card" bodyStyle="text-align: left;">
            <p>新对象的值：{{newObj}}</p>  
            <p>新对象2的值：{{newObj2}}</p>
            <a-button @click="change">点我测试</a-button>
        </a-card>
    </div>
</template>
<script>
import { onMounted, reactive, toRefs, toRef, ref } from 'vue'
import func from './common'
export default {
    name: 'about_proxy',
    setup(){
        let obj = {name : 'alice', age : 12};
        let newObj = toRef(obj, 'name');
        let newObj2 = ref(222);
        newObj2.value = 333;
        // console.log(obj.name, newObj.value) // alice  alice
        const change = () => {
            newObj.value = 'Tom';
            // console.log(obj.name, newObj.value) // Tom Tom 
        }
        const state = reactive({
            data1: '',
            data2: '',
            data3: '',
            data4: '',
            data5: '',
            data6: null
        })
        onMounted(() => {
            const arr = func.enhancedArray([1, 2, 3, 4, 5]);
            state.data1 = arr[-1]
            state.data2 = arr[[2, 4]]
            state.data3 = arr[[2, -2, 1]]
            state.data4 = arr[["2:4"]]
            state.data5 = arr[["-2:3"]]
            const data = func.enhancedObject({
                user: {
                    name: "阿宝哥",
                    settings: {
                        theme: "dark"
                    }
                }
            })
            state.data6 = data.theme
        })

        // 只读
        const handlerOnly = {
            set: 'Read-Only',
            defineProperty: 'Read-Only',
            deleteProperty: "Read-Only",
            preventExtensions: "Read-Only",
            setPrototypeOf: "Read-Only"
        }
        const man = {
            name: 'test'
        }
        const proxy = new Proxy(man, handlerOnly)
        // console.log(proxy.name)
        // proxy.name = 'aaa'; // 只读，不能修改；报错 TypeError: 'Read-Only' returned for property 'set' of object '#<Object>' is not a function
        
        // 不希望抛出异常
        const freeze = (obj) => {
            return new Proxy(obj, {
                set() {return true;},
                deleteProperty() {return false;},
                defineProperty() {return true;},
                setPrototypeOf() {return true;}
            })
        }
        let frozen = freeze([1, 2, 3])
        frozen[0] = 6;
        // console.log(frozen) // [1, 2, 3]
        delete freeze[0];
        // console.log(frozen) // [1, 2, 3]
        frozen = Object.defineProperty(frozen, 0, {value: 66});
        // console.log(frozen) // [1, 2, 3]

        // 拦截方法调用
        const traceMethodCalls = obj => {
            const handler = {
                get(target, propKey, receiver) {
                    console.log(receiver)
                    const originMethod = target[propKey];
                    return function(...args) {
                        const result = originMethod.apply(this, args);
                        console.log(propKey + JSON.stringify(args) + "->" + JSON.stringify(result))
                        return result;
                    }
                }
            }
            return new Proxy(obj, handler)
        }
        const obj2 = {
            multiply(x, y) {
                return x*y
            }
        }
        const tracedObj = traceMethodCalls(obj2);
        // tracedObj.multiply(2, 3)

        // 拦截属性调用
        const tracePropAccess = (obj, propKeys) => {
            const propKeysSet = new Set(propKeys);
            return new Proxy(obj, {
                get(target, propKey, receiver) {
                    if(propKeysSet.has(propKey)) {
                        console.log('GET '+ propKey)
                    }
                    return Reflect.get(target, propKey, receiver) 
                },
                set(target, propKey, value, receiver) {
                    if(propKeysSet.has(propKey)) {
                        console.log('SET ' + propKey + ' = ' + value)
                    }
                    return Reflect.set(target, propKey, value, receiver)
                }
            })
        }
        const tracedMan = {
            name: 'Ally'
        }
        const tracedManObj = tracePropAccess(tracedMan, ['name'])
        // console.log(tracedManObj.name) // GET name Ally
        // console.log(tracedManObj.age) // undefined
        // tracedManObj.name = 'Ankh' // SET name = Ankh

        // 隐藏属性
        const hideProperty = (target, prefix = "_") => 
            new Proxy(target, {
                has: (obj, prop) => {
                    return !prop.startsWith(prefix) && prop in obj
                },
                ownKeys: obj => {
                    Reflect.ownKeys(obj).filter(prop => typeof prop !== 'string' || !prop.startsWith(prefix))
                },
                get: (obj, prop, rec) => {
                    return (prop in obj && !prop.startsWith(prefix)) ? obj[prop] : undefined
                }
            })
        const man2 = hideProperty({
            name: '个个',
            _pwd: '123456'
        })
        // console.log(man2._pwd) // undefined
        // console.log('_pwd' in man2) // false
        // console.log(Object.keys(man2))

        // 验证属性值
        const validatedUser = target => {
            return new Proxy(target, {
                set(target, prop, value, receiver) {
                    if(prop === 'email') {
                        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (!regex.test(value)) {
                            // throw new TypeError('The user must have a valid email');
                            // return false;    
                        }
                    }
                    if(prop === 'age') {
                        if (value < 20 || value > 80) {
                            console.log("A user's age must be between 20 and 80");
                            // return false;
                        }
                    }
                    // return Reflect.set(...arguments);
                }
            })
        }
        let user = {
            email: "",
            age: 0
        };

        user = validatedUser(user);
        // user.email = "semlinker.com"; // The user must have a valid email
        // user.age = 100; // A user's age must be between 20 and 80
        // console.log(user)

        // 创建可撤销的proxy对象
        const target = {};
        const handler = {};
        const {proxy: p2, revoke} = Proxy.revocable(target, handler);
        p2.name = '哥哥';
        // console.log(p2.name); // 哥哥
        revoke();
        // console.log(p2.name); // Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked at <anonymous>

        return {
            ...toRefs(state),
            newObj,
            newObj2,
            change,
            proxy
        }
    }
}
</script>
<style lang='less' scoped>
    .wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .card{
            width: 300px;
            height: 300px;
            margin-right: 10px;
            margin-bottom: 10px;
            &:last-child{
                margin-right: 0;
            }
        }
    }
</style>