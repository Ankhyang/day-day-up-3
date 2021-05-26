<!--
 * @Description: app布局入口
 * @Author: yangzai
 * @Date: 2021-05-17 09:55:26
 * @LastEditTime: 2021-05-25 10:41:06
 * @LastEditors: yangzai
-->
<template>
    <div class="app-wrapper">
        <SideBar class="sidebar-container" />
        <div class="main-container">
            <div>
                <NavBar/>
                <TagsView/>
            </div>
            <AppMain/>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent} from 'vue'
import { AppMain, NavBar, TagsView, SideBar } from './components'
import { useI18n } from 'vue-i18n'
// import { useStore } from '@/store'

export default defineComponent({
    name: 'Layout',
    components: {
        AppMain,
        NavBar,
        SideBar,
        // Settings,
        TagsView
    },
    setup() {
        const { t } = useI18n()
        // const store = useStore()
        // const state = reactive({
        //     handleClickOutside: () => {
        //         // store.dispatch()
        //     }
        // })
        return {
            t, 
            // ...toRefs(state)
        }
    },
})
</script>
<style lang="scss" scoped>
.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
}

.drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
}

.main-container {
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: $sideBarWidth;
    position: relative;
}

.sidebar-container {
    transition: width 0.28s;
    width: $sideBarWidth !important;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    background-color: #ffffff !important;
}

.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
}

.hideSidebar {
    .main-container {
        margin-left: 54px;
    }

    .sidebar-container {
        width: 54px !important;
    }

    .fixed-header {
        width: calc(100% - 54px)
    }
}

/* for mobile response 适配移动端 */
.mobile {
    .main-container {
        margin-left: 0px;
    }

    .sidebar-container {
        transition: transform .28s;
        width: $sideBarWidth !important;
    }

    &.openSidebar {
        position: fixed;
        top: 0;
    }

    &.hideSidebar {
        .sidebar-container {
        pointer-events: none;
        transition-duration: 0.3s;
        transform: translate3d(-$sideBarWidth, 0, 0);
        }
    }

    .fixed-header {
        width: 100%;
    }
}

.withoutAnimation {
    .main-container,
    .sidebar-container {
        transition: none;
    }
}

</style>




