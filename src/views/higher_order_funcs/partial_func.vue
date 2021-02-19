<template>
    <div>
        <p>我是偏函数</p>
        <p>{{name1}}</p>
        <p>{{name2}}</p>
    </div>
</template>

<script>
const _ = require('lodash')
export default {
    name: 'partial_func',
    setup() {
        const buildUri = (scheme, domain, path) => {
            return `${scheme}://${domain}/${path}`;
        }
        const gitPath = _.partial(buildUri, 'https', 'github.com');
        const name1 = gitPath("semlinker/semlinker");
        const name2 = gitPath("Ankhyang/free-table");
        return{
            name1,
            name2
        }
    }
}
</script>

<style>

</style>