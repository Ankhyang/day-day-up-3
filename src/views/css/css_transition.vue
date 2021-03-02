<template>
    <div class="div1"></div>
    <div class="div2"></div>
    <div class="div3"></div>
    <div class="div4"></div>

    <div class="board">
        <div class="g-wrap"></div>
        <div class="g-box">
            <div class="g-row" v-for="(item, index) in arr" :key="index">
                <div class="g-item" v-for="(s, i) in arr" :key="i"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
// 利用transition实现动画缓慢过渡
export default {
    name: 'transition',
    setup() {
        const state = reactive({
            arr: new Array(100)
        })
        return{
            ...toRefs(state)
        }
    }
}
</script>
<style lang="less" scoped>
    div{
        width: 180px;
        height: 120px;
    }
    .div1{
        transition: .8s transform 1s linear; // 延迟1s触发
    }
    .div1:hover{
        transform: translate(120px, 0)
    }

    .div2, .div3, .div4{
        position: relative;
        box-shadow: inset 0 0 0 3px #ddd;
        margin: 10px;
    }
    .div2::before, .div4::before{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        box-sizing: border-box;
        transition: width .25s, height .25s, border-bottom-color 0s;
        transition-delay: .25s, 0s, .25s;
    }
    .div2:hover::before, .div4:hover::before{
        width: 180px;
        height: 120px;
        border-left: 3px solid #00e2ff;
        border-bottom: 3px solid #00e2ff;
    }
    .div3::after{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        right: 0;
        bottom: 0;
        box-sizing: border-box;
        transition: width .25s, height .25s, border-top-color 0s;
        transition-delay: .25s, 0s, .25s;
    }
    .div3:hover::after{
        width: 180px;
        height: 120px;
        border-right: 3px solid #00e2ff;
        border-top: 3px solid #00e2ff;
    }

    .div4::after{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        right: 0;
        bottom: 0;
        transition: width .25s, height .25s, border-top-color 0s;
        transition-delay: .75s, .5s, .25s;
    }
    .div4:hover::after{
        width: 180px;
        height: 120px;
        border-right: 3px solid #00e2ff;
        border-top: 3px solid #00e2ff;
    }
    .board{
        width: 502px;
        height: 503px;
        border: 1px solid black;
        position: relative;
        .g-wrap{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 10;
            &:active {
                display: none;
            }
        }
        .g-box{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            .g-row{
                width: 100%;
                height: 5px;
                display: flex;
                flex-wrap: wrap;
                .g-item{
                    width: 5px;
                    height: 5px;
                    // border: 1px solid rgba(216, 214, 214, 0.8);
                    box-sizing: border-box;
                    transition: 9999999s;
                    &:hover{
                        transition: 0s;
                        background: #000;
                    }
                }
            }
        }
    }
</style>