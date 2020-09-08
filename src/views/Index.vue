<template>
    <div>
        <q-layout>
            <q-drawer
                    v-model="drawer"
                    :width="200"
                    :breakpoint="500"
                    overlay
                    bordered
                    content-class="bg-grey-3"
            >
                <q-scroll-area class="fit">
                    <q-list>

                        <q-item>
                            <q-item-section>
                                {{$t('language')}}
                            </q-item-section>
                        </q-item>

                        <q-separator />
                        <q-item clickable v-ripple @click="changeLanguage('en')">
                            <q-item-section>
                                English
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-ripple @click="changeLanguage('de')">
                            <q-item-section>
                                Deutsch
                            </q-item-section>
                        </q-item>

                    </q-list>
                </q-scroll-area>
            </q-drawer>
            <q-header elevated>
                <q-toolbar class="text-primary">
                    <q-btn @click="drawer = !drawer" flat round dense icon="menu" />
                    <q-toolbar-title>
                        Toolbar
                    </q-toolbar-title>
                    <q-btn flat round dense icon="more_vert" />
                </q-toolbar>
            </q-header>
            <q-page-container>
                <q-tab-panels :keep-alive="true" v-model="tab" animated>
                    <q-tab-panel style="padding: 0px" name="normal">
                        <normal></normal>
                    </q-tab-panel>

                    <q-tab-panel style="padding: 0px" name="custom">
                        <custom></custom>
                    </q-tab-panel>

                    <q-tab-panel style="padding: 0px" name="history">
                        <history></history>
                    </q-tab-panel>
                </q-tab-panels>
            </q-page-container>
            <q-footer height-hint="150" bordered class="bg-white text-primary">
                <q-tabs
                        v-model="tab"
                        narrow-indicator
                        dense
                        align="justify"
                        class="text-primary">
                    <q-tab :ripple="false" name="normal" to="/normal"  icon="calculate" :label="$t('toolbar.normal')"/>
                    <q-tab :ripple="false" name="custom" to="/custom" icon="ballot" :label="$t('toolbar.custom')"/>
                    <q-tab :ripple="false" name="history" to="/history" icon="history" :label="$t('toolbar.history')"/>
                </q-tabs>
            </q-footer>
        </q-layout>
    </div>
</template>

<script>
    import Normal from "@views/main/Normal";
    import History from "@views/main/History";
    import Custom from "@views/main/Custom";
    export default {
        name: "Index",
        data() {
            return {
                tab: 'normal',
                drawer: false
            }
        },
        components: {
            // 异步组件引入方式，需要展示组件的时候才渲染
            'normal': Normal,
            'history': History,
            'custom': Custom,
        },
        methods: {
            changeLanguage(lang) {
                this.$i18n.locale = lang
            }
        }
    }
</script>

<style lang="scss">
    .q-tab__label {
        font-size: 12px !important;
    }
    .q-layout__section--marginal {
        background-color: #fff !important;
        color: #fff !important;
    }
</style>
