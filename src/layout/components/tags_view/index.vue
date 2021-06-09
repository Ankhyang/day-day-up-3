<!--
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-18 17:46:42
 * @LastEditTime: 2021-06-09 18:15:08
 * @LastEditors: yangzai
-->
<template>
    <div class="tags-view-container">
        <ScrollPane 
            class="tags-view-wrapper"
        >
            <router-link>

            </router-link>
        </ScrollPane>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, getCurrentInstance, onBeforeMount, reactive } from 'vue'
import { useStore } from '@/store'

import ScrollPane from './scroll-pane.vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default defineComponent({
    components: {
        ScrollPane
    },
    setup() {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        const { t } = useI18n()
        const instance = getCurrentInstance()
        const { ctx } = instance as any

        const visitedViews = computed(() => {
            return store.state.tagViews.visitedViews
        })
        const state = reactive({
            
        })
        const addTags = () => {

        }
        const initTags = () => {

        }
        onBeforeMount(() => {
            initTags()
            addTags()
        }) 
        return {
            visitedViews 
        }
    },
})
</script>
<style lang="scss" scoped>
.tags-view-wrapper {
    .tags-view-item {
        .el-icon-close {
            width: 16px;
            height: 16px;
            vertical-align: 2px;
            border-radius: 50%;
            text-align: center;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            transform-origin: 100% 50%;
            &:before {
                transform: scale(0.6);
                display: inline-block;
                vertical-align: -3px;
            }
            &:hover {
                background-color: #b4bccc;
                color: #fff;
            }
        }
    }
}
.tags-view-container {
    height: 34px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eee;
    .tags-view-wrapper {
        .tags-view-item {
            display: inline-block;
            position: relative;
            cursor: pointer;
            height: 26px;
            line-height: 25px;
            border: 1px solid rgba(124,141,181,.3);
            border-radius: 4px;
            color: #495060;
            background: #fff;
            padding: 0 8px;
            font-size: 12px;
            margin-left: 5px;
            margin-top: 4px;
            box-sizing: border-box;
            &:first-of-type {
                margin-left: 15px;
            }
            &:last-of-type {
                margin-right: 15px;
            }
            &.active {
                background-color: #5DDAB4;
                color: #fff;
            }
        }
    }
    .contextmenu {
        margin: 0;
        background: #fff;
        z-index: 3000;
        position: absolute;
        list-style-type: none;
        padding: 5px 0;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        li {
            margin: 0;
            padding: 7px 16px;
            cursor: pointer;
            &:hover {
                background: #eee;
            }
        }
    }
}
</style>
