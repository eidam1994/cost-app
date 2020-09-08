<template>
    <q-layout view="lHh lpr lFf" container>
        <q-header elevated>
            <head-bar :title="$t('toolbar.history')" :back="false" :history="true"
                      @clearHistory="clearHistory"></head-bar>
        </q-header>
        <q-page-container>
            <q-list padding separator>
                <q-item v-for="(item, index) in historyList" clickable v-ripple>
                    <q-item-section @click="checkResult(item.id)">
                        <q-item-label>{{$t('options.cTotal')}}(€) : {{item.cTotal}}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-btn @click="deleteDialog(item.id, index)" size="xs" color="deep-orange" glossy label="Delete"/>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-page-container>
        <q-footer height-hint="150" bordered class="bg-white text-primary">
            <tool-bar :tab="'history'"></tool-bar>
        </q-footer>
        <q-dialog v-model="deleteFlag" persistent>
            <q-card>
                <q-card-section class="row items-center">
                    <span class="q-ml-sm">{{$t('errorInfo.delete')}}</span>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Confirm" color="primary" @click="deleteHistory" v-close-popup/>
                    <q-btn flat label="Cancel" color="primary" v-close-popup/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-layout>
</template>

<script>
    import {getStore, setStore} from "@/utils/util";

    export default {
        name: "History",
        components: {
            'head-bar': () => import('@components/HeadBar'),
            'tool-bar': () => import('@components/ToolBar')
        },
        data() {
            return {
                historyList: [],
                deleteFlag: false,
                deleteId: '',
                deleteIndex: 0
            }
        },
        methods: {
            getHistory() {
                this.historyList = JSON.parse(getStore('history'))
            },
            clearHistory() {
                this.historyList = []
            },
            deleteDialog(id, index) {
                this.deleteFlag = true
                this.deleteId = id
                this.deleteIndex = index
            },
            deleteHistory() {
                let histories = JSON.parse(getStore('history'))
                histories.some((item, i)=>{
                    if(item.id == this.deleteId){
                        histories.splice(i, 1)
                        //在数组的some方法中，如果return true，就会立即终止这个数组的后续循环
                        return true
                    }
                })
                setStore('history', histories)
                this.historyList = histories
            },
            checkResult(id) {
                let history = null
                this.historyList.some((item, i)=>{
                    if(item.id == id){
                        history = item
                        //在数组的some方法中，如果return true，就会立即终止这个数组的后续循环
                        return true
                    }
                })
                if (history.type == 'custom') {
                    this.$router.push({
                        name: 'customResult', query: {
                            model: history.model,
                            power: history.power,
                            gas: history.gas,
                            flasche: history.flasche,
                            material: history.material,
                            rate: history.rate,
                            volume: history.volume,
                            cMaschine: history.cMaschine,
                            cMaterial: history.cMaterial,
                            cElektricity: history.cElektricity,
                            cGas: history.cGas,
                            cLabor: history.cLabor,
                            cTotal: history.cTotal,
                        }
                    })   
                } else {
                    this.$router.push({
                        name: 'result', query: {
                            process: history.process,
                            company: history.company,
                            maschine: history.maschine,
                            material: history.material,
                            volume: history.volume,
                            cMaschine: history.cMaschine,
                            cMaterial: history.cMaterial,
                            cElektricity: history.cElektricity,
                            cGas: history.cGas,
                            cLabor: history.cLabor,
                            cTotal: history.cTotal,
                        }
                    })
                }
            },
            backIndex() {
                this.$router.push('/')
            }
        },
        mounted() {
            this.getHistory()
            if (window.history && window.history.pushState) {
                history.pushState(null, null, document.URL);
                window.addEventListener('popstate', this.backIndex, false);//false阻止默认事件
            }
        },
        destroyed(){
            window.removeEventListener('popstate', this.backIndex, false);//false阻止默认事件
        }
    }
</script>

<style scoped>

</style>
