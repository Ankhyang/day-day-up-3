<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanghuan
 * @Date: 2021-08-26 14:26:27
 * @LastEditors: yanghuan
 * @LastEditTime: 2021-08-26 16:48:26
-->
<template>
    <div>
        <div style="margin-bottom: 15px">
            <h3>{{ t('permission.roles') }}: {{roles}}</h3>
        </div>
        <h3>{{ t('permission.switchRoles') }}</h3>
        <div>
            <el-radio-group v-model="currentRole">
                <el-radio-button label="editor"></el-radio-button>
                <el-radio-button label="admin"></el-radio-button>
            </el-radio-group>
        </div>
    </div>
</template>
<script lang="ts">
import { UserActionTypes } from '@/store/modules/user/action-type'
import { computed, defineComponent, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
export default defineComponent({
    setup() {
        const { t } = useI18n()
        const store = useStore()
        const roles = computed(() => store.state.user.roles)
        const currentRole = ref(roles.value[0])
        watch(currentRole, value => {
            store.dispatch(UserActionTypes.ACTION_CHANGE_ROLES, value)
        })
        return {
            t,
            roles,
            currentRole
        }
    }
})
</script>
<style lang="sass" scoped>

</style>
