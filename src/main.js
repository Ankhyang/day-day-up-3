import Vue from 'vue'
import App from './App.vue'

import './base.less'

import { foo, log } from './foo.js'
log(foo);

new Vue({
    render: h => h(App)
}).$mount('#app')