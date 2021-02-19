<template>
    <div>
        <p>我是柯里化函数</p>
        <p>{{name1}}</p>
        <p>{{name2}}</p>
    </div>
</template>

<script>
const _ = require('lodash')
export default {
    name: 'curry_func',
    setup() {
        const buildUri = (scheme, domain, path) => {
            return `${scheme}://${domain}/${path}`;
        }
        const buildUriCurry = _.curry(buildUri);
        const myGithubPath = buildUriCurry("https", "github.com");
        const name1 = myGithubPath("semlinker/semlinker");
        const name2 = myGithubPath("Ankhyang/project-template");
        return{
            buildUri,
            name1,
            name2
        }
    }
}
</script>
