<template>
    <div>
        <p>我是惰性载入函数</p>
    </div>
</template>
<script>
export default {
    name: 'inertia_func',
    setup(){
        // 根据不同的逻辑判断 覆盖调用函数逻辑
        const addHandler = (element, type, handler) => {
            if (element.addEventListener) {
                addHandler = function (element, type, handler) {
                    element.addEventListener(type, handler, false);
                }
            } else if (element.attachEvent) {
                addHandler = function (element, type, handler) {
                    element.attachEvent("on" + type, handler);
                }
            } else {
                addHandler = function (element, type, handler) {
                    element["on" + type] = handler;
                }
            }
            // 保证首次调用能正常执行监听
            return addHandler(element, type, handler)
        }
        return {
            addHandler
        }
    }
}
</script>
<style lang='less' scoped>
    
</style>