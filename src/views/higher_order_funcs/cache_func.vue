<template>
    <div>
        <p>我是缓存函数</p>
        <p>{{num1}}</p>
    </div>
</template>
<script>
import {computed} from 'vue'
export default {
    name: 'cache_func',
    setup(){
        const num1 = computed(() => {
            const cacFunc = memorize(caculate)
            return cacFunc(2, 3)
        })
        const memorize = (fn) => {
            const cache = Object.create(null);
            return function(...args) {
                const _args = JSON.stringify(args);
                return cache[_args] || (cache[_args] = fn.apply(fn, args))
            }
        }
        const caculate = (a, b) => {
            return a * b
        }
        return {
            memorize,
            caculate,
            num1
        }
    }
}
</script>
<style lang='less' scoped>
    
</style>