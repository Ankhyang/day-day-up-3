<template>
    <a-card title="增强型数组" style="width: 300px;height: 300px;margin-right: 10px;" bodyStyle="text-align: left;">
        <p>arr[-1]: {{data1}}</p>
        <p>arr[2, 4]: {{data2}}</p>
        <p>arr[2, -2, 1]: {{data3}}</p>
        <p>arr["2:4"]: {{data4}}</p>
        <p>arr["-2:3"]: {{data5}}</p>
    </a-card>
    <a-card title="增强型对象" style="width: 300px;height: 300px;" bodyStyle="text-align: left;">
        <p>user: {
                    name: "阿宝哥",
                    settings: {
                        theme: "dark"
                    }
                }</p>
        data.theme: {{data6}}
    </a-card>
</template>
<script>
import { onMounted, reactive, toRefs } from 'vue'
import func from './common'
export default {
    name: 'about_proxy',
    setup(){
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
        return {
            ...toRefs(state)
        }
    }
}
</script>