/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-20 10:13:14
 * @LastEditTime: 2021-05-20 10:37:23
 * @LastEditors: yangzai
 */
import { VuexModule, getModule, Module, Mutation, Action, MutationAction } from 'vuex-module-decorators'
import { setSidebarStatus, setLanguage, setSize } from '@/utils/cookies'
import { store } from '@/store'
import { state } from './state'

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule {
    @Mutation 
    private TOGGLE_SIDEBAR(withoutAnimation: boolean): void {
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = withoutAnimation
        setSidebarStatus(state.sidebar.opened ? 'opened':'closed')
    }
    @Action
    public ToggleSideBar(withoutAnimation: boolean):void {
        this.context.commit('TOGGLE_SIDEBAR', withoutAnimation)
    }
 
}

export const AppModule = getModule(App)