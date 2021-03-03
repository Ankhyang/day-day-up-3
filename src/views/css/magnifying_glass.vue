<template>
    <div class="image" @mouseenter="enterHandler" @mouseleave="leaveHandler" @mousemove="overHandler"></div>
</template>

<script>
export default {
    name: 'magnifying_glass',
    setup(){
        const enterHandler = e => {
            e.target.setAttribute('zoomed', 1);
        }
        const leaveHandler = e => {
            e.target.removeAttribute('zoomed');
        }
        const overHandler = e => {
            const rect = e.target.getBoundingClientRect();
            let x = e.offsetX/rect.width
            let y = e.offsetY/rect.height
            e.target.style.setProperty('--x', x);
            e.target.style.setProperty('--y', y);
        }
        return{
            enterHandler,
            leaveHandler,
            overHandler
        }
    }
}
</script>

<style>
    .image{
        width: 300px;
        height: 300px;
        background-color: #000;
        background-image: url(https://placekitten.com/900/900);
        background-size: 300px 300px;
        background-repeat: no-repeat;
    }
    .image[zoomed] {
        background-size: 900px 900px;
        background-position: calc(var(--x)*100%) calc(var(--y)*100%);
    }
</style>