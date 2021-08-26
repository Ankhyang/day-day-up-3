<!--
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-18 17:47:07
 * @LastEditTime: 2021-08-26 16:16:21
 * @LastEditors: yanghuan
-->
<template>
    <section class="app-main">
        <router-view v-slot="{ Component }" :key="key">
            <transition name="fade-transform" mode="out-in">
                <keep-alive :include="cachedViews">
                    <component :is="Component"/>
                </keep-alive>
            </transition>
        </router-view>
    </section>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        const store = useStore()
        const route = useRoute()
        const cachedViews = computed(() => {
            return store.state.tagViews.cachedViews
        })
        const key = () => {
            return route.path
        }
        return {
            cachedViews,
            key
        }
    },
})
</script>
<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>
