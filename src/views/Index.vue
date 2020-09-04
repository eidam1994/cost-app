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
                <keep-alive>
                    <component :is="active"></component>
                </keep-alive>
            </q-page-container>
            <q-footer height-hint="150" bordered class="bg-white text-primary">
                <q-tabs
                        v-model="tab"
                        narrow-indicator
                        dense
                        align="justify"
                        class="text-primary">
                    <q-tab :ripple="false" @click="active = 'normal'" name="mails" icon="calculate" :label="$t('toolbar.normal')"/>
                    <q-tab :ripple="false" @click="active = 'custom'" name="alarms" icon="ballot" :label="$t('toolbar.custom')"/>
                    <q-tab :ripple="false" @click="active = 'history'" name="movies" icon="history" :label="$t('toolbar.history')"/>
                </q-tabs>
            </q-footer>
        </q-layout>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                active: 'normal',
                tab: 'mails',
                drawer: false
            }
        },
        components: {
            // 异步组件引入方式，需要展示组件的时候才渲染
            'normal': () => import('@views/main/Normal'),
            'history': () => import('@views/main/History'),
            'custom': () => import('@views/main/Custom'),
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
