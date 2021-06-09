<!--
 * @Description: 左侧菜单导航
 * @Author: yangzai
 * @Date: 2021-05-18 17:46:03
 * @LastEditTime: 2021-06-08 15:51:21
 * @LastEditors: yangzai
-->
<template>
    <div 
        :class="{'has-logo': showLogo}"
        class="sideWrap"
    >
        <SidebarLogo v-if="showLogo" :collapse="isCollapse"/>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :collapse="!isCollapse"
                :unique-opened="false"
                :background-color="variables.menuBg"
                :text-color="variables.menuText"
                :active-text-color="menuActiveTextColor"
                :default-active="activeMenu"
                mode="vertical"
            >
                <SidebarItem
                    v-for="route in routes"
                    :key="route.path"
                    :item="route"
                    :base-path="route.path"
                    :is-collapse="isCollapse"
                />
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
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
        const sidebar = computed(() =>{
            return store.state.app.sidebar
        })
        const routes = computed(() => {
            return store.state.permission.routes
        })
        const showLogo = computed(() => {
            return store.state.settings.showSidebarLogo
        })
        const menuActiveTextColor = computed(() => {
            if(store.state.settings.sidebarTextTheme) {
                return '#57CAEB'
            }else{
                return variables.menuActiveText
            }
        })
        const activeMenu = computed(() =>{
            const { path, meta } = route
            if(meta?.activeMenu) return meta.activeMenu
            return path
        })
        const isCollapse = computed(() => {
            return sidebar.value.opened
        })
        return {
            variables,
            sidebar,
            showLogo,
            menuActiveTextColor,
            routes,
            isCollapse,
            activeMenu
        }
    },
})
</script>
<style lang="scss" scoped>
.sidebar-container {
    .horizontal-collapse-transition {
        transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }
    .scrollbar-wrapper {
        overflow-x: hidden !important;
    }
    .el-scrollbar__view {
        height: 100%;
    }
    .el-scrollbar__bar {
        &.is-vertical {
            right: 0px;
        }
        &.is-horizontal {
            display: none;
        }
    }
}
.el-scrollbar {
    height: 100%;
}
.has-logo {
    .el-scrollbar {
        height: calc(100vh - 100px);
    }
}
.el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
}
</style>