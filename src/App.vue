<template>
        <router-view/>
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
    .q-tab__label {
        font-size: 12px !important;
    }
    .q-layout__section--marginal {
        background-color: #fff !important;
        color: #fff !important;
    }
</style>
