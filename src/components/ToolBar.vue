<template>
    <q-tabs
            v-model="flag"
            narrow-indicator
            dense
            align="justify"
            class="text-primary">
        <q-route-tab :ripple="false" name="normal" to="/" replace  icon="calculate" :label="$t('toolbar.normal')"/>
        <q-route-tab :ripple="false" name="custom" to="/custom" replace icon="ballot" :label="$t('toolbar.custom')"/>
        <q-route-tab :ripple="false" name="history" to="/history" replace icon="history" :label="$t('toolbar.history')"/>
    </q-tabs>
</template>

<script>
    export default {
        name: "ToolBar",
        props: ["tab"],
        data() {
            return {
                flag: null
            }
        },
        mounted() {
            this.flag = this.tab
        }
    }
</script>

<style scoped>

</style>
