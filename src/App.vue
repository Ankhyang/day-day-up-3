<!--
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-05-17 09:55:26
 * @LastEditTime: 2021-08-25 14:22:29
 * @LastEditors: yanghuan
-->
<template>
    <router-view></router-view>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({

    })
</script>
<style lang='scss'>
.el-menu-item:hover{
  outline: 0 !important;
  color: #409EFF !important;
  transition: all 0.5s ease-in-out;
}
.el-submenu__title:focus, .el-submenu__title:hover{
  outline: 0 !important;
  color: #fff !important;
  background: #435EBE !important;
  border-radius: 8px !important;
}
.el-menu-item:hover{
   outline: 0 !important;
  color: #fff !important;
  background: #435EBE !important;
  border-radius: 8px !important;
}
</style>
