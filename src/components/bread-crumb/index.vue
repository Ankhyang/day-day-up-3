<!--
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-06-08 14:46:54
 * @LastEditTime: 2021-06-09 11:05:05
 * @LastEditors: yangzai
-->
<template>
    <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
                <span class="no-redirect" v-if="item.redirect === 'no-redirect' || index === breadcrumbs.length - 1">
                    {{t('route.' + item.meta.title)}}
                </span>
                <a v-else @click.prevent="handleLink(item)"> 
                    {{t('route.' + item.meta.title)}}
                </a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { compile } from 'path-to-regexp'
import { useRoute, RouteLocationMatched } from 'vue-router'
import router from '@/router'
export default defineComponent({
    setup() {
        const { t } = useI18n()
        const currentRoute = useRoute()
        const pathCompile = (path: string) => {
            const { params } = currentRoute
            const toPath = compile(path)
            return toPath(params)
        }
        const state = reactive({
            breadcrumbs: [] as Array<RouteLocationMatched>,
            getBreadCrumb: () => {
                // 匹配当前路由，返回路由数组
                let matched = currentRoute.matched.filter(item => item.meta && item.meta.title)
                const first = matched[0]
                // 非首页 添加首页路径
                if(!state.isDashbard(first)) {
                    matched = [{ path: '/dashboard', meta: { title: 'dashboard' } } as any].concat(matched)
                }
                state.breadcrumbs = matched.filter(item => {
                    return item.meta && item.meta.title && item.meta.breadcrumb !== false
                })
            },
            // 判断是否是首页
            isDashbard(route: RouteLocationMatched): boolean {
                const name = route?.name
                if(!name) return false
                return name.toString().trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
            },
            handleLink(item: any) {
                const { path, redirect } = item
                if(redirect) {
                    router.push(redirect).catch(err => {
                        console.warn(err)
                    })
                    return 
                }
                router.push(pathCompile(path)).catch(err => {
                    console.warn(err)
                })
            }
        })
        // 监听路径上的某个属性
        watch(() => currentRoute.path, path => {
            if(path.startsWith('/redirect/')) return
            state.getBreadCrumb()
        })
        onBeforeMount(() => {
            state.getBreadCrumb()
        })
        return {
            t,
            ...toRefs(state)
        }
    },
})
</script>

<style lang="scss" scoped>
    .el-breadcrumb__inner,
    .el-breadcrumb__inner a {
        font-weight: 400 !important;
    }
    .app-breadcrumb {
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
        margin-left: 8px;
        .no-redirect {
            color: #97a8be;
            cursor: text;
        }
    }
</style>
