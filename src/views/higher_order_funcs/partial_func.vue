<script type="text/jsx">
const _ = require('lodash')

export default {
    name: 'partial_func',
    methods: {
        buildUri(scheme, domain, path) {
            return `${scheme}://${domain}/${path}`;
        }
    },
    render() {
        const { buildUri } = this;
        const gitPath = _.partial(buildUri, 'https', 'github.com');
        const name1 = gitPath("semlinker/semlinker");
        const name2 = gitPath("Ankhyang/free-table");

        return (
            <div>
                <p>我是偏函数</p>
                <p>{name1}</p>
                <p>{name2}</p>
            </div>
        )
    }
}
</script>

<style lang="less" scoped>

</style>