<template>
    <a-layout>
        <a-layout-header>我是头部内容 —— 创意字体展示</a-layout-header>
        <a-layout>
            <a-layout-sider theme="light">
               <a-menu mode="inline" v-model="current">
                    <a-sub-menu :title="item.title" :selectable="false" v-for="(item, index) in menu" :key="index"> 
                        <a-menu-item :key="s.path" v-for="s in item.children" @click="changeSidebar">{{s.title}}</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout-content class="content">
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
        <a-layout-footer>底部版权所有</a-layout-footer>
    </a-layout>
</template>
<script>
import {useRouter} from 'vue-router'
import menu from '@/utils/commonData'
import {reactive, toRefs} from 'vue'
export default {
    name: 'index',
    setup() {
        const router = useRouter()
        const state = reactive({
            openKeys: ['sub1'],
            current: ['mail'],
            menu
        })
        const changeSidebar = data => {
            state.current = data.keyPath[0]
            router.replace({path: data.key})
        }
        return {
            ...toRefs(state),
            changeSidebar
        }
    }
}
</script><style lang="less" scoped>
.ant-layout{
    width: 100%;
    height: 100%;
    color: #000;
    background: #fff;
    text-align: center;
    .ant-layout-header{
        width: 100%;
        height: 10%;
        background: #e8ffff;
        margin-bottom: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .ant-layout-has-sider{
        height: 80%;
        .ant-layout-sider{
            background: #bedcfa;
            margin: 5px 5px 5px 0;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .ant-layout-content{
            background: #f6f6f6;   
            margin: 5px 0 5px 5px;
            border-radius: 5px;    
            display: flex;
            align-items: center;
            justify-content: center;     
        }
    }
    .ant-layout-footer{
        height: 5%;
        margin-top: 5px;
        line-height: 100%;
        background: #d0e8f2;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
}
</style>