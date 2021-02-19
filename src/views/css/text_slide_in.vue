<script type="text/jsx">
// 实现文字缓慢渐入显示特效
export default {
    name: 'text_slide_in',
    data(){
        return {
            time: 100
        }
    },
    created() {
        let id = setInterval(() => {
            this.time -= 10
            if(this.time === 0) {
                clearInterval(id)
            }
        }, 100)
    },
    render() {
        let { time } = this
        return (
            <div class="wrapper">
                <h1 style={{'background-position-x': time + '%'}}>Less Bezel, more screen</h1>
            </div>
        )
    }
}
</script>

<style lang="less" scoped>
    .wrapper{
        width: 100%;
        height: 100%;
        background-color: #c6ebc9;
        h1{
            font-size: 48px;
            font-family: Helvetica;
            color: transparent;
            letter-spacing: 3px;
            // 添加阴影背景，通过设置x的位置来实现渐入效果
            background-image: linear-gradient(75deg, rgba(255, 133, 133, 1) 0%, rgba(255, 133, 133, 1) 33.33%, rgba(255, 133, 133, 0) 66.67%, rgba(255, 133, 133, 0) 100%,);
            background-size: 300% 100%;
            background-clip: text;  
            transition: 2s background-position-x ease-in-out;
        }
    }
</style>