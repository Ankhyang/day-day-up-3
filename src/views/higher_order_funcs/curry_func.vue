<script type="text/jsx">
const _ = require('lodash')

export default {
    name: 'curry_func',
    methods: {
        buildUri(scheme, domain, path) {
            return `${scheme}://${domain}/${path}`;
        }
    },
    render() {
        const { buildUri } = this;
        const buildUriCurry  = _.curry(buildUri);
        const myGithubPath = buildUriCurry("https", "github.com");
        const name1 = myGithubPath("semlinker/semlinker");
        const name2 = myGithubPath("Ankhyang/project-template");
        return (
            <div>
                <p>我是柯里化函数</p>
                <p>{name1}</p>
                <p>{name2}</p>
            </div>
        )
    }
}
</script>

<style lang="less" scoped>

</style>