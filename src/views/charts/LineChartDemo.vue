<!--
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-06-08 11:05:07
 * @LastEditTime: 2021-06-08 11:05:45
 * @LastEditors: yangzai
-->
<template>
    <div class="chart-container">
        <LineChart width="100%" height="100%"/>
    </div>
</template>
<script lang="ts">
import LineChart from '@/components/charts/LineChart.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        LineChart
    },
    setup() {
        
    },
})
</script>
<style lang="scss" scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
