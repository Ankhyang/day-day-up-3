<template>
    <div class="box">
        <div class="item"></div>
        <div class="left-to-right-border"></div>
        <div class="right-to-bottom-border"></div>
        <div class="bottom-to-right-border"></div>
        <div class="bottom-to-start-border"></div>
    </div>
</template>
<script>
export default {
    name: 'css_border'
}
</script>
<style lang="less" scoped>
    .box {
        width:100px;
        height:100px;
        position:relative;
        box-sizing: content-box;
        margin:50px auto;
        background-color: lightblue;
    }
    .box1 {
        width:100px;
        height:100px;
        box-sizing: border-box;
        position:relative;
        margin:50px auto;
        background-color:rgb(100,112,106);
    }
    .left-to-right-border {
        position:absolute;
        width:0;
        height:1px;
        /* top:0; */
        right:0;
        /* bottom:0; */
        transition:0.5s;
        -webkit-transition:0.5s;
        -moz-transition:0.5s;
        -ms-transition:0.5s;
        -o-transition:0.5s;
    }
    .right-to-bottom-border {
        position:absolute;
        width:1px;
        height:0px;
        top:0;
        right:0;
        transition:0.5s;
        -webkit-transition:0.5s;
        -moz-transition:0.5s;
        -ms-transition:0.5s;
        -o-transition:0.5s;
    }
    .bottom-to-right-border {
        position:absolute;
        width:0px;
        height:1px;
        bottom:-1px;
        left:0;
        transition:0.5s;
        -webkit-transition:0.5s;
        -moz-transition:0.5s;
        -ms-transition:0.5s;
        -o-transition:0.5s;
    }
    .bottom-to-start-border {
        position:absolute;
        width:1px;
        height:0px;
        bottom:0;
        left:-1px;
        transition:0.5s;
        -webkit-transition:0.5s;
        -moz-transition:0.5s;
        -ms-transition:0.5s;
        -o-transition:0.5s;
    }
    .box:hover .left-to-right-border {
        width:100%;
        border-top:1px solid #DE040A;
        transition:0.5s;
        -webkit-transition:0.5s;
        -moz-transition:0.5s;
        -ms-transition:0.5s;
        -o-transition:0.5s;
    }
    .box:hover .right-to-bottom-border {
        height:100%;
        border-right:1px solid #DE040A;
        transition:0.5s;
        -webkit-transition:0.5s;
        -moz-transition:0.5s;
        -ms-transition:0.5s;
        -o-transition:0.5s;
    }
    .box:hover .bottom-to-right-border {
        width:100%;
        border-top:1px solid #DE040A;
        transition:0.5s;
        -webkit-transition:0.5s;
        -moz-transition:0.5s;
        -ms-transition:0.5s;
        -o-transition:0.5s;
    }
    .box:hover .bottom-to-start-border {
        height:100%;
        border-right:1px solid #DE040A;
        transition:0.5s;
        -webkit-transition:0.5s;
        -moz-transition:0.5s;
        -ms-transition:0.5s;
        -o-transition:0.5s;
    }
</style>