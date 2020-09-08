<template>
    <q-toolbar class="text-primary">
        <q-btn @click="prev" v-show="back" flat round dense icon="arrow_back"/>
        <q-toolbar-title>
            {{title}}
        </q-toolbar-title>
        <q-btn flat round dense icon="language">
            <q-menu>
                <q-list style="min-width: 100px">
                    <q-item clickable v-close-popup @click="changeLanguage('en')">
                        <q-item-section>English</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="changeLanguage('de')">
                        <q-item-section>Deutsch</q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
        </q-btn>
        <q-btn v-if="history" flat round dense icon="more_vert">
            <q-menu>
                <q-list style="min-width: 100px">
                    <q-item clickable v-close-popup @click="confirmDialog">
                        <q-item-section>clear</q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
        </q-btn>
        <q-dialog v-model="confirm" persistent>
            <q-card>
                <q-card-section class="row items-center">
                    <span class="q-ml-sm">{{$t('errorInfo.clear')}}</span>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Confirm" color="primary" @click="clearHistory" v-close-popup />
                    <q-btn flat label="Cancel" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-toolbar>
</template>

<script>
    import {removeStore} from "@/utils/util";

    export default {
        name: "HeadBar",
        data() {
            return {
                confirm: false
            }
        },
        props: ["title", "back", "history"],
        methods: {
            changeLanguage(lang) {
                this.$i18n.locale = lang
            },
            prev() {
                this.$router.go(-1)
            },
            confirmDialog() {
                this.confirm = true
            },
            clearHistory() {
                removeStore('history')
                this.$emit('clearHistory', null)
            }
        }
    }
</script>

<style scoped>

</style>
