<!--
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-06-09 11:12:43
 * @LastEditTime: 2021-06-09 14:24:14
 * @LastEditors: yangzai
-->
<template>
    <div @click="click">
        <svg
            class="icon"
            aria-hidden="true"
            font-size="40px"
        >
            <use xlink:href="#iconshiliangzhinengduixiang1" />
        </svg>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import screenfull from 'screenfull'
import { ElMessage } from 'element-plus'

export default defineComponent({
    setup() {
        const state = reactive({
            isFull: false,
            click: () => {
                // 如果不允许进入全屏，发出不允许提示
                if(!screenfull.isEnabled) {
                    ElMessage({
                        message: 'your browser can not work',
                        type: 'warning'
                    })
                    return false
                }
                screenfull.toggle()
            }
        })
        return {
            ...toRefs(state)
        }
    },
})
</script>
