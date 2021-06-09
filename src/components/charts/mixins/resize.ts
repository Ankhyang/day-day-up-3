/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-26 16:26:02
 * @LastEditTime: 2021-06-08 11:09:42
 * @LastEditors: yangzai
 */
import { ref } from 'vue'
export default function() {
    const chart = ref<any>()
    const sidebarEle = ref<Element>()

    const chartResizeHandler = () => {
        if(chart.value) chart.value.resize()
    }

    const sidebarResizeHandler = (e: TransitionEvent) => {
        if(e.propertyName === 'width') chartResizeHandler()
    }

    const initResizeEvent = () => {
        window.addEventListener('resize', chartResizeHandler)
    }

    const destroyResizeEvent = () => {
        window.removeEventListener('resize', chartResizeHandler)
    }

    const initSidebarResizeEvent = () => {
        sidebarEle.value = document.getElementsByClassName('sidebar-container')[0]
        if(sidebarEle.value) {
            sidebarEle.value.addEventListener('transitionend', sidebarResizeHandler as EventListener)
        }
    }

    const destroySidebarResizeEvent = () => {
        if(sidebarEle.value) {
            sidebarEle.value.removeEventListener('transitionend', sidebarResizeHandler as EventListener)
        }
    }

    const mounted = () => {
        initResizeEvent()
        initSidebarResizeEvent()
    }
    const beforeDestroy = () => {
        destroyResizeEvent()
        destroySidebarResizeEvent()
    }
    const activated = () => {
        initResizeEvent()
        initSidebarResizeEvent()
    }
    const deactivated = () => {
        destroyResizeEvent()
        destroySidebarResizeEvent()
    }
    return {
        chart,
        mounted,
        beforeDestroy,
        activated,
        deactivated
    }
}