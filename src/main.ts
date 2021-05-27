/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-17 09:57:07
 * @LastEditTime: 2021-05-27 10:45:22
 * @LastEditors: yangzai
 */
import { createApp, Directive } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { loadAllPlugins } from '@/plugins'

// 图标样式引入，只需一次
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'
// css样式初始化
import 'normalize.css'
import '@/permission'

const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)

// 自定义指令

app.use(router)
    .use(store)
    .mount('#app')
