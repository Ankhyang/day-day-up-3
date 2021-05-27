<!--
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-26 15:14:19
 * @LastEditTime: 2021-05-27 09:56:07
 * @LastEditors: yangzai
-->
<template>
    <a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener noreferrer">
        <slot/>
    </a>
    <div v-else @click="push">
        <slot/>
    </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'
import { isExternal } from '@/utils/validate'

export default defineComponent({
    props: {
        to: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const router = useRouter()
        const push = () => {
            router.push(props.to).catch(err => {
                console.log(err)
            })
        }
        return {
            push,
            isExternal
        }
    },
})
</script>
<style lang="scss" scoped>

</style>
