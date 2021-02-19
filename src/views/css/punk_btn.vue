<script type="text/jsx">
// 实现赛博朋克故障风按钮
export default {
    name: 'punk_btn',
    data(){

    },
    render() {
        return (
            <div class='wrapper'>
                <button>AVAILABLE NOW</button>
            </div>
        )
    }
}
</script>

<style lang="less" scoped>
    .wrapper{
        width: 100%;
        height: 100%;
        background-color: #f8f500;
        button, button::after{
            width: 380px;
            height: 86px;
            line-height: 88px;
            font-size: 36px;
            letter-spacing: 3px;
            border: 0;
            position: relative;
            color: #fff;
            cursor: pointer;
            outline: transparent;
            box-shadow: 6px 0 0 #00e6f6;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
        }
        button::after{
            --slice-0: inset(50% 50% 50% 50%); // 初始裁剪值，相当于裁剪中心点 = 无
            --slice-1: inset(50% -6px 45% 0);
            --slice-2: inset(60% -6px 30% 0);
            --slice-3: inset(40% -6px 50% 0);
            --slice-4: inset(20% -6px 60% 0);
            --slice-5: inset(10% -6px 80% 0);
            content: 'AVAILABLE NOW';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 3%, #00e6f6 3%,  #00e6f6 5%, #ff013c 5% );
            clip-path: var(--slice-0);
            text-shadow: -3px -3px 0 #f8f005, 3px 3px 0 #00e6f6;
        }
        button:hover::after{
            animation: 1s glitch;
            animation-timing-function: steps(1, end);
        }
        @keyframes glitch {
            0%{
                clip-path: var(--slice-1);
                transform: translate(-15px, -10px);
            }
            10%{
                clip-path: var(--slice-3);
                transform: translate(10px, 10px);
            }
            20%{
                clip-path: var(--slice-2);
                transform: translate(0px, 0px);
            }
            30%{
                clip-path: var(--slice-1);
                transform: translate(5px, -10px);
            }
            50%{
                clip-path: var(--slice-4);
                transform: translate(3px, -10px);
            }
            60%{
                clip-path: var(--slice-5);
                transform: translate(5px, -10px);
            }
            80%{
                clip-path: var(--slice-3);
                transform: translate(10px, 0px);
            }
            90%{
                clip-path: var(--slice-1);
                transform: translate(10px, 5px);
            }
            100%{
                clip-path: var(--slice-0);
                transform: translate(0);
            }
        }
    }
</style>
