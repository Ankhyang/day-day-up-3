let list = [], routers = [];
let importAll = require.context('@/router/modules', false, /\.js$/)
importAll.keys().map(path => {
    //兼容处理：.default 获取 ES6 规范暴露的内容; 后者获取 commonJS 规范暴露的内容
    let router = importAll(path).default || importAll(path)
    routers.push(router)
    if(router.children.length>0){
        list.push(...router.children)
    }
})
const isArray = arr =>{
    return Object.prototype.toString.call(arr) === '[object Array]'?true:false
}
const flatten = arr => arr.reduce((prev, next) => { //递归调用 ，展开 menu 数据 ，将含有url 的配置添加进 router
    let {name, path, title, component, children ,keepAlive} = next;
    if (isArray(children)) return prev.concat(flatten(children));
    if (path) {
        let routerConfig = {
            path, 
            name, 
            component,
            meta: { title: title, keepAlive: keepAlive }
        }
        return  prev.concat(routerConfig)
    }
},[])
export default {
    routers,
    children: [...flatten(list)]
}