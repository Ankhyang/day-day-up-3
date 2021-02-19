<script type="text/jsx">
// 利用伪类的content结合attr展示内容

export default {
    name: 'contentAttr',
    data() {
        return {
            colors: {
                '姨妈红': '#f66',
                '基佬紫': '#66f',
                '箩底橙': '#f90',
                '姣婆蓝': '#09f',
                '大粪青': '#9c3',
                '原谅绿': '#3c9'
            }
        }
    },
    methods: {
        renderEle() {
            return (
                Object.keys(this.colors).map(item => {
                    let value = this.colors[item]
                    return <li data-name={item} style={{'backgroundColor': value}}></li>
                })
            )
        }
    },
    render() {
        return (
            <ul class="hover-tips">
                {this.renderEle()}
            </ul>
        )
    }    
}
</script>

<style lang="less" scoped>
.hover-tips {
    display: flex;
    justify-content: space-between;
    width: 200px;
    li {
        position: relative;
        padding: 2px;
        border: 2px solid transparent;
        border-radius: 100%;
        width: 24px;
        height: 24px;
        background-clip: content-box;
        cursor: pointer;
        transition: all 300ms;
        &::before,
        &::after {
            position: absolute;
            left: 50%;
            bottom: 100%;
            opacity: 0;
            transform: translate3d(0, -30px, 0);
            transition: all 300ms;
        }
        &::before {
            margin: 0 0 12px -35px;
            border-radius: 5px;
            width: 70px;
            height: 30px;
            background-color: rgba(#000, .5);
            line-height: 30px;
            text-align: center;
            color: #fff;
            content: attr(data-name);
        }
        &::after {
            margin-left: -6px;
            border: 6px solid transparent;
            border-top-color: rgba(#000, .5);
            width: 0;
            height: 0;
            content: "";
        }
        &:hover {
            &::before,
            &::after {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }
    }
}

</style>