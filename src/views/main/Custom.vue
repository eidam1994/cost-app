<template>
    <div style="height: 100%">
        <q-layout view="lHh lpr lFf" container>
            <q-header elevated>
                <head-bar :title="$t('toolbar.custom')" :back="false"></head-bar>
            </q-header>
            <q-page-container>
                <q-input style="margin: 10px" color="teal" outlined v-model="model" :label="$t('customOptions.model')">
                    <template v-slot:append>
                        <q-avatar square>
                            <img src="@icons/data.png">
                        </q-avatar>
                    </template>
                </q-input>
                <q-input style="margin: 10px" color="teal" outlined v-model="power" :label="$t('customOptions.power')">
                    <template v-slot:append>
                        <q-avatar square>
                            <img src="@icons/power.png">
                        </q-avatar>
                    </template>
                </q-input>
                <q-input style="margin: 10px" color="teal" outlined v-model="gas" :label="$t('customOptions.gas')">
                    <template v-slot:append>
                        <q-avatar square>
                            <img src="@icons/gas.png">
                        </q-avatar>
                    </template>
                </q-input>
                <q-input style="margin: 10px" color="teal" outlined v-model="flasche"
                         :label="$t('customOptions.flasche')">
                    <template v-slot:append>
                        <q-avatar square>
                            <img src="@icons/interrelated.png">
                        </q-avatar>
                    </template>
                </q-input>
                <q-input style="margin: 10px" color="teal" outlined v-model="material"
                         :label="$t('customOptions.material')">
                    <template v-slot:append>
                        <q-avatar square>
                            <img src="@icons/rate.png">
                        </q-avatar>
                    </template>
                </q-input>
                <q-input style="margin: 10px" color="teal" outlined v-model="rate" :label="$t('customOptions.rate')">
                    <template v-slot:append>
                        <q-avatar square>
                            <img src="@icons/flasche.png">
                        </q-avatar>
                    </template>
                </q-input>
                <q-input style="margin: 10px" color="teal" outlined v-model="volume"
                         :label="$t('customOptions.volume')">
                    <template v-slot:append>
                        <q-avatar square>
                            <img src="@icons/volume.png">
                        </q-avatar>
                    </template>
                </q-input>
                <q-btn class="confirmBtn" color="primary" :label="$t('confirm')" @click="calculate"/>
            </q-page-container>
            <q-footer height-hint="150" bordered class="bg-white text-primary">
                <tool-bar :tab="'custom'"></tool-bar>
            </q-footer>
        </q-layout>
    </div>
</template>

<script>
    import HeadBar from "@components/HeadBar";
    import ToolBar from "@components/ToolBar";
    import {setHistory, uuid} from "@/utils/util";

    export default {
        name: "Manager",
        components: {
            'head-bar': HeadBar,
            'tool-bar': ToolBar
        },
        data() {
            return {
                model: null,
                power: null,
                gas: null,
                flasche: null,
                material: null,
                rate: null,
                volume: null,
                ech: null,
                buildTime: null,
                rcy: null,
                cMaschine: null,
                cMaterial: null,
                cElektricity: null,
                cGas: null,
                cLabor: null,
                cTotal: null
            }
        },
        methods: {
            calculate() {
                this.buildTime = this.volume / this.rate
                this.rcy = parseFloat(this.flasche) * 1.2 * 7.5 * 12;
                let cMaschine = (((parseFloat(this.model) / 6.0) * (1.15) + parseFloat(this.rcy)) / (365.0 * 24.0 * 0.9)) * this.buildTime
                this.cMaschine = cMaschine.toFixed(2)
                let cMaterial = this.volume * this.material * 1.1;
                this.cMaterial = cMaterial.toFixed(2)
                this.ech = this.power * 0.32
                let cElektricity = this.ech * this.buildTime
                this.cElektricity = cElektricity.toFixed(2)
                let cGas = this.gas * this.buildTime
                this.cGas = cGas.toFixed(2)
                let cLabor = 35.9 * (parseFloat(this.buildTime) / 50);
                this.cLabor = cLabor.toFixed(2)
                let cTotal = cMaschine + cMaterial + cElektricity + cGas + cLabor;
                this.cTotal = cTotal.toFixed(2)
                let result = new Object()
                result['id'] = uuid()
                result['type'] = 'custom'
                result['model'] = this.model
                result['power'] = this.power
                result['gas'] = this.gas
                result['flasche'] = this.flasche
                result['material'] = this.material
                result['rate'] = this.rate
                result['volume'] = this.volume
                result['cMaschine'] = this.cMaschine
                result['cMaterial'] = this.cMaterial
                result['cElektricity'] = this.cElektricity
                result['cGas'] = this.cGas
                result['cLabor'] = this.cLabor
                result['cTotal'] = this.cTotal
                setHistory(result)
                this.$router.push({
                    name: 'customResult', query: {
                        model: this.model,
                        power: this.power,
                        gas: this.gas,
                        flasche: this.flasche,
                        material: this.material,
                        rate: this.rate,
                        volume: this.volume,
                        cMaschine: this.cMaschine,
                        cMaterial: this.cMaterial,
                        cElektricity: this.cElektricity,
                        cGas: this.cGas,
                        cLabor: this.cLabor,
                        cTotal: this.cTotal,
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .van-cell__title {
        text-align: left;
    }

    .confirmBtn {
        width: calc(100% - 20px);
        margin: 0px 10px 0px 10px;
    }
</style>
