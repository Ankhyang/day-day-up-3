<script type="text/jsx">
// 自定义指令
export default {
    name: 'custome_directives',
    data() {
        return{
            copyText: 'a copy directives'
        }
    },
    render() {
        const { copyText } = this
        return (
            <div>
                <a-button v-copy={copyText} type="primary">复制</a-button>
            </div>
        )
    }
}
</script>