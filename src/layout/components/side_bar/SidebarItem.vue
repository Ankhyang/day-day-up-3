<!--
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-18 18:08:39
 * @LastEditTime: 2021-05-27 10:40:41
 * @LastEditors: yangzai
-->
<template>
    <div v-if="!item.meta || !item.meta.path">
        <!-- 无子菜单 -->
        <template v-if="singleChild && !singleChild.children">
            <SidebarItemLink 
                v-if="singleChild.meta" 
                :to="resolvePath(singleChild.path)"
            >
                <el-menu-item :index="resolvePath(singleChild.path)">
                    <svg 
                        v-if="singleChild.meta.icon"
                        class="icon"
                        aria-hidden="true"
                        font-size="17px"
                    >
                        <use :xlink:href="singleChild.meta.icon"/>
                    </svg>
                    <span v-if="singleChild.meta.title">
                        {{t("route." + singleChild.meta.title)}}
                    </span>
                </el-menu-item>
            </SidebarItemLink>
        </template>

        <!-- 有子菜单 -->
        <el-submenu v-else :index="resolvePath(item.path)">
            <template #title>
                <svg
                    v-if="item.meta && item.meta.icon"
                    class="icon"
                    aria-hidden="true"
                    font-size="16px"
                >
                    <use :xlink:href="item.meta.icon"/>
                </svg>
                <span v-if="item.meta && item.meta.title">
                    {{t("route." + item.meta.title)}}
                </span>
            </template>
            <template v-if="item.children">
                <sidebar-item
                    v-for="child in item.children"
                    :key="child.path"
                    :item="child"
                    :is-collapse="isCollapse"
                    :base-path="resolvePath(child.path)"
                    class="nest-menu"
                />
            </template>
        </el-submenu>
    </div>
</template>
<script lang="ts">
// node默认库
import path from 'path'
import { computed, defineComponent, PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { useI18n } from 'vue-i18n'
import SidebarItemLink from './SidebarItemLink.vue'
import { isExternal } from '@/utils/validate'
export default defineComponent({
    props: {
        item: {
            type: Object as PropType<RouteRecordRaw>,
            required: true
        },
        isCollapse: {
            type: Boolean,
            required: true
        },
        basePath: {
            type: String,
            required: true
        }
    },
    components: {
        SidebarItemLink
    },
    setup(props) {
        const { t } = useI18n()
        // 总是展示根菜单
        const alwaysShowRootMenu = computed(() => (props.item.meta && props.item.meta.alwaysShow))
        // 需要展示的菜单个数
        const showChildNumber = computed(() => {
            if(props.item.children) {
                const arr = props.item.children.filter(k => !(k.meta && k.meta.hidden))
                return arr.length
            }
            return 0
        })
        // 无子菜单的菜单
        const singleChild = computed(() => {
            if(showChildNumber.value > 1) return null
            if(props.item.children) {
                for(const child of props.item.children) {
                    if(!child.meta || !child.meta.hidden) {
                        return child
                    }
                }
            }
            return { ...props.item, path: '' }
        })

        // 路径处理
        const resolvePath = (routePath: string) => {
            if(isExternal(routePath)) {
                return routePath
            }
            if(isExternal(props.basePath)) {
                return props.basePath
            }
            return path.resolve(props.basePath, routePath)
        }
        return {
            t,
            resolvePath,
            showChildNumber,
            alwaysShowRootMenu,
            singleChild
        }
    },
})
</script>
<style lang="scss" scoped>
.el-submenu.is-active > .el-submenu__title {
  color: $subMenuActiveText !important;
}

.full-mode {
  .nest-menu .el-submenu > .el-submenu__title,
  .el-submenu .el-menu-item {
    min-width: $sideBarWidth !important;
    background-color: $subMenuBg !important;

    &:hover {
      background-color: $subMenuHover !important;
    }
  }
  .el-menu-item{
    &>span{
      display: inline-block;
      padding-left: 5px;
    }
  }
  .el-submenu {
    overflow: hidden;

    & > .el-submenu__title {
      .el-submenu__icon-arrow {
        display: none;
      }

      & > span {
             padding-left: 5px;

      }
    }
  }
}

.simple-mode {
  &.first-level {
    .submenu-title-noDropdown {
      padding: 0 !important;
      position: relative;

      .el-tooltip {
        padding: 0 !important;
      }
    }

    .el-submenu {
      overflow: hidden;

      & > .el-submenu__title {
        padding: 0px !important;

        .el-submenu__icon-arrow {
          display: none;
        }

        & > span {
          visibility: hidden;
        }
      }
    }
  }
}
svg {
  margin-right: 16px;
}

.simple-mode {
  svg {
    margin-left: 20px;
  }
}
</style>