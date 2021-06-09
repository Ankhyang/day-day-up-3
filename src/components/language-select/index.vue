<!--
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-06-09 14:28:20
 * @LastEditTime: 2021-06-09 14:54:52
 * @LastEditors: yangzai
-->
<template>
    <div>
        <el-dropdown>
            <svg
                class="icon"
                aria-hidden="true"
                font-size="45px"
                :class="{'svg-color': isWhite}"
            >
                <use xlink:href="#iconzhongyingwen" />
            </svg>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="(item) in languages" :key="item.value" :disabled="language === item.value">
                    <span @click="handleSet(item.value)">{{ item.name }}</span>
                    </el-dropdown-item> 
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useStore } from '@/store'
import { useI18n } from 'vue-i18n'
import { AppActionTypes } from '@/store/modules/app/action-type'
import { ElMessage } from 'element-plus'
type Language = {
    name: string,
    value: string
}

export default defineComponent({
    setup() {
        const store = useStore()
        const { locale } = useI18n()
        const state = reactive({
            languages: [{name: 'en', value: 'en'}, {name: '中文', value: 'zh-cn'}] as Array<Language>,
            handleSet: (lang: string) => {
                locale.value = lang
                store.dispatch(AppActionTypes.ACTION_SET_LANGUAGE, lang)
                ElMessage({
                    message: 'Switch Language Success !',
                    type: 'success'
                })
            }
        })
        const language = computed(() => {
            return store.state.app.language
        })
        return {
            ...toRefs(state),
            language
        }
    },
})
</script>
<style lang="scss" scoped>
    .svg-color{
        fill: white;
    }
</style>

