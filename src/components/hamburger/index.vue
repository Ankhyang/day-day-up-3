<!--
 * @Description: 折叠边栏按钮
 * @Author: yangzai
 * @Date: 2021-06-08 11:50:51
 * @LastEditTime: 2021-06-08 11:57:43
 * @LastEditors: yangzai
-->
<template>
    <div
        :class="[{'is-active': isActive}]"
        @click="toggleClick"
    >
        <svg class="icon" aria-hidden="true" font-size="20px">
            <use xlink:href="#iconhamburger" />
        </svg>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        isActive: {
            type: Boolean,
            default: false
        }
    },
    emits: ["toggle-click"],
    setup(_, context) {
        const toggleClick = () => {
            context.emit('toggle-click')
        }
        return {
            toggleClick
        }
    },
})
</script>
<style lang="scss" scoped>
.icon {
    vertical-align: middle;
}
.is-active {
    transform: rotate(180deg);
}
</style>
