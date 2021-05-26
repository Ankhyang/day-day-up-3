<!--
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-26 16:17:13
 * @LastEditTime: 2021-05-26 17:31:57
 * @LastEditors: yangzai
-->
<template>
    <div class="chart-container">
        <BarChart width="100%" height="100%"/>
    </div>
</template>
<script lang="ts">
import BarChart from '@/components/charts/BarChart.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        BarChart
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
