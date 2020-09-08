<template>
    <keep-alive exclude="History,Result,CustomResult">
        <router-view/>
    </keep-alive>
</template>

<script>

    export default {
        name: 'LayoutDefault'
    }
</script>

<style>
    body, html {
        margin: 0;
        height: 100%;

    }

    .q-layout-container {
        height: 100%;
    }
</style>
