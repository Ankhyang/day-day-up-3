<!--
 * @Description: 左侧菜单导航
 * @Author: yangzai
 * @Date: 2021-05-18 17:46:03
 * @LastEditTime: 2021-05-19 10:37:39
 * @LastEditors: yangzai
-->
<template>
    <div class="sideWrap">
        <SidebarLogo/>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :unique-opened="false"
            >
                
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SidebarLogo from './SidebarLogo.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/_variables.scss'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'sidebar',
    components: {
        SidebarLogo,
        SidebarItem
    },
    setup() {
        const store = useStore()
        const route = useRoute()

        return {
            variables
        }
    },
})
</script>
<style lang="scss" scoped>
    
</style>