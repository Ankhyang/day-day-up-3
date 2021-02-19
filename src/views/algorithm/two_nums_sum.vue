<template>
    <div class='wrapper'>{{JSON.stringify(sum)}}</div>
</template>
<script>
// 1. 两数之和
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
import {reactive, toRefs, onMounted} from 'vue'
export default {
    name: 'two_nums_sum',
    setup(){
        const state = reactive({
            sum: []
        })
        const twoSum = (nums, target) => {
            const map = new Map();
            for(let i=0;i<nums.length;i++) {
                const diff = target - nums[i];
                if(map.has(diff)) {
                    return [map.get(diff), i]
                }
                map.set(nums[i], i)
            }
        }
        onMounted(() => {
            state.sum = twoSum([2, 7, 9, 12, 11, 16], 11)
        })
        return {
            ...toRefs(state)
        }
    }
}
</script>
<style lang='less' scoped>
    .wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;     
    }
</style>