<!--
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-18 17:46:42
 * @LastEditTime: 2021-06-10 11:03:21
 * @LastEditors: yangzai
-->
<template>
    <div class="tags-view-container">
        <ScrollPane 
            class="tags-view-wrapper"
        >
            <router-link 
                ref="tag"
                v-for="tag in visitedViews"
                :key="tag.path"
                tag="span"
                :class="isActive(tag) ? 'active' : ''"
                class="tags-view-item"
                :to="{path: tag.path, query: tag.query, fullPath: tag.fullPath}"
                @click.middle="!isAffix(tag) ? closeSelectedTag(tag):''"
            >
                {{ t('route.' + tag.meta.title) }}
                <span 
                    v-if="!isAffix(tag)"
                    class="el-icon-close"
                    @click.prevent.stop="closeSelectedTag(tag)"
                ></span>
            </router-link>
        </ScrollPane>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, getCurrentInstance, onBeforeMount, reactive, toRefs, watch } from 'vue'
import { useStore } from '@/store'
import { TagView } from '@/store/modules/tagsview/state'
import { TagsActionTypes } from '@/store/modules/tagsview/action-type'

import ScrollPane from './ScrollPane.vue'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import path from 'path'

export default defineComponent({
    components: {
        ScrollPane
    },
    setup() {
        const store = useStore()
        const currentRoute = useRoute()
        const router = useRouter()
        const { t } = useI18n()
        const instance = getCurrentInstance()
        const { ctx } = instance as any
        // 获取访问过的标签
        const visitedViews = computed(() => {
            return store.state.tagViews.visitedViews
        })
        // 跳转到最后一个标签
        const toLastView = (visitedViews: TagView[], view: TagView) => {
            
        }
        const state = reactive({
            affixTags: [] as TagView[],
            selectedTag: {} as TagView[],
            // 当前tag是否正在展示
            isActive: (route: TagView) => {
                return route.path === currentRoute.path
            },
            // 是否固定
            isAffix: (tag: TagView) => {
                return tag?.meta?.affix
            },
            // 关闭当前tag
            closeSelectedTag: (view: TagView) => {
                store.dispatch(TagsActionTypes.ACTION_DEL_VIEW, view)
                if(state.isActive(view)) {
                    toLastView(store.state.tagViews.visitedViews, view)
                }
            },
        })
        const addTags = () => {
            if(currentRoute.name) {
                store.dispatch(TagsActionTypes.ACTION_ADD_VIEW, currentRoute)
            }
            return false
        }
        const routes = computed(() => {
            return store.state.permission.routes
        })
        const filterAffixTags = (routes: RouteRecordRaw[], basePath = '/') => {
            let tags: TagView[] = []
            routes.forEach(route => {
                if(route?.meta?.affix) {
                    const tagPath = path.resolve(basePath, route.path)
                    tags.push({
                        fullPath: tagPath,
                        path: tagPath,
                        name: route.name, 
                        meta: { ...route.meta }
                    })
                }
                if(route.children) {
                    const childTags = filterAffixTags(route.children, route.path)
                    if(childTags.length > 0) {
                        tags.concat(childTags)
                    }
                }
            })
            return tags
        }
        const initTags = () => {
            state.affixTags = filterAffixTags(routes.value)
            for(const tag of state.affixTags) {
                if(tag.name) {
                    store.dispatch(TagsActionTypes.ACTION_ADD_VISITED_VIEW, tag as TagView)
                }
            }
        }
        watch(() => currentRoute.name, () => {
            if(currentRoute.name !== 'Login') {
                addTags()
            }
        })
        onBeforeMount(() => {
            initTags()
            addTags()
        }) 
        return {
            visitedViews,
            t,
            ...toRefs(state)
        }
    },
})
</script>
<style lang="scss" scoped>
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
