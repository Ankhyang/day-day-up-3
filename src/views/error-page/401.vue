<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanghuan
 * @Date: 2021-08-25 14:23:47
 * @LastEditors: yanghuan
 * @LastEditTime: 2021-08-25 16:04:54
-->
<template>
    <div class="errPage-container">
        <el-row>
            <el-col :span="12">
                <h2>你没有权限访问该页面</h2>
                <el-button
                    icon="el-icon-arrow-left"
                    class="back-btn"
                    @click="back"
                    >
                    返回
                </el-button>
            </el-col>
            <el-col :span="12">
                <img :src="errGif" width="313" height="428" class="some-gif" alt="Girl has dropped her ice cream.">
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import errGif from '@/assets/401-images/401.gif'
import { useRouter } from 'vue-router'
export default defineComponent({
    setup() {
        const router = useRouter()
        const data = reactive({
            'errGif': errGif + '?' + new Date(),
            back() {
                router.push({path: '/dashboard'}).catch(err => {
                    console.warn(err)
                })
            }
        })
        return {
            ...toRefs(data)
        }
    },
})
</script>
<style lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;
  h2{
    margin-bottom: 40px;
  }
  .back-btn {
    background: #008489;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none!important;
  }
}
</style>
