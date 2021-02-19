<template>
    <div class="state-ball" :style="{'--offset': progress}">
        <div class="wave"></div>
        <div class="num">{{progress}}%</div>
    </div>
</template>
<script>
import { reactive, onBeforeMount, toRefs } from 'vue'
export default {
    name: 'contentFloatingBall',
    setup() {
        const state = reactive({
            progress: 5,
            max: 100
        })
        onBeforeMount(() => {
            setInterval(() => {
            if(state.progress < state.max) {
                state.progress += 1;
            }else{
                state.progress = 5
            }
        }, 150)
        })
        return {
            ...toRefs(state)
        }
    }
}
</script>
<style lang="less" scoped>
    .state-ball{
        overflow: hidden;
        width: 150px;
        height: 150px;
        padding: 5px;
        border-radius: 100%;
        border: 3px solid #3c9;
        background-color: #fff;
        position: relative;
        &::before, &::after{
            content: '';
            position: absolute;
            z-index: 3;
            bottom: 5px;
            left: 50%;
            margin-left: -100px;
            width: 200px;
            height: 200px;
        }
        &::before{
            margin-bottom: calc(var(--offset)* 1.4px);
            border-radius: 42%;
            background-color: rgba(#fff, .5);
            animation: rotate 10s linear -5s infinite;
        }
        &::after{
            margin-bottom: calc(var(--offset)* 1.4px + 10px);
            border-radius: 45%;
            background-color: rgba(#fff, .8);
            animation: rotate 15s infinite;
        }
        .wave{
            width: 100%;
            height: 100%;
            border-radius: 100%;
            position: relative;
            background-image: linear-gradient(to bottom, #af8 13%, #3c9 90%);
        }
        .num{
            color: #db6400;
            font-size: 16px;
            position: absolute;
            top: 43%;
            left: 0;
            right: 0;
            margin: 0 auto;
            z-index: 4;
        }
        @keyframes rotate {
            to {
                transform: rotate(1turn);
            }
        }
    }
</style>