<template>
    <div style="height: 100%">
        <q-layout view="lHh lpr lFf" container>
            <q-header elevated>
                <head-bar :title="$t('toolbar.normal')" :back="false"></head-bar>
            </q-header>
            <q-page-container>
                <div class="calculate">
                    <q-select style="margin: 10px" color="teal"
                              outlined v-model="process" :options="processList" :label="$t('options.process')">
                        <template v-slot:append>
                            <q-avatar square>
                                <img src="@icons/process.png">
                            </q-avatar>
                        </template>
                    </q-select>
                    <q-select style="margin: 10px" color="teal"
                              outlined v-model="company" :options="companyList" :label="$t('options.company')">
                        <template v-slot:append>
                            <q-avatar square>
                                <img src="@icons/company.png">
                            </q-avatar>
                        </template>
                    </q-select>
                    <q-select style="margin: 10px" color="teal"
                              outlined v-model="maschine" :options="maschineList" :label="$t('options.maschine')">
                        <template v-slot:append>
                            <q-avatar square>
                                <img src="@icons/data.png">
                            </q-avatar>
                        </template>
                    </q-select>
                    <q-select style="margin: 10px" color="teal"
                              outlined v-model="material" :options="materialList" :label="$t('options.material')">
                        <template v-slot:append>
                            <q-avatar square>
                                <img src="@icons/interrelated.png">
                            </q-avatar>
                        </template>
                    </q-select>
                    <q-input type="tel" style="margin: 10px" color="teal" outlined v-model="buildRate" :label="$t('options.rate')">
                        <template v-slot:append>
                            <q-avatar>
                                <img src="@icons/rate.png">
                            </q-avatar>
                        </template>
                        <q-slider v-show="maxRate > 0" style="height: 100%" v-model="buildRate" :min="0" :max="maxRate"
                                  :step="0.1"/>
                    </q-input>
                    <q-input type="tel" class="volume" style="margin: 10px" color="teal" outlined v-model="volume" :label="$t('options.volume')">
                        <template v-slot:append>
                            <q-avatar>
                                <img src="@icons/volume.png">
                            </q-avatar>
                        </template>
                    </q-input>
                    <q-btn @click="importStl" class="importBtn" color="primary" outline icon="3d_rotation"
                           :label="$t('import')"/>
                    <input ref="uploadFile" @change="getFile" type="file" style="display:none"/>
                    <div id="stlCanvas" v-bind:volume="volume" style="width:100%; height:300px;display:none"></div>
                    <q-btn class="confirmBtn" color="primary" :label="$t('confirm')" @click="calculate"/>
                </div>
            </q-page-container>
            <q-footer height-hint="150" bordered class="bg-white text-primary">
                <tool-bar :tab="'normal'"></tool-bar>
            </q-footer>
        </q-layout>
        <q-dialog
                v-model="error">
            <q-card style="width: 100%">
                <q-card-section>
                    <div class="text-h6">Error</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    {{errorInfo}}
                </q-card-section>
            </q-card>
        </q-dialog>

    </div>
</template>

<script>
    import $ from 'jquery'
    import {draw} from "@/utils/import";
    import {isEmpty, setHistory, uuid} from "@/utils/util";

    export default {
        name: "Home",
        components: {
            'head-bar': () => import('@components/HeadBar'),
            'tool-bar': () => import('@components/ToolBar')
        },
        data() {
            return {
                error: false,
                errorInfo: '',
                process: null,
                company: null,
                maschine: null,
                material: null,
                volume: null,
                models: null,
                currentModel: null,
                buildRate: 0,
                maxRate: 0,
                modelPrice: null,
                ech: null,
                gch: null,
                flaeche: null,
                materialPrice: null,
                buildTime: null,
                rcy: null,
                companyList: [],
                stlParams: {
                    stlFile: false,
                    width: 0,
                    height: 0,
                },
                result: {
                    cMaschine: null,
                    cMaterial: null,
                    cElektricity: null,
                    cGas: null,
                    cLabor: null,
                    cTotal: null
                }
            }
        },
        watch: {
            process(val) {
                this.company = null;
                let companySelect = this.$t('companyList');
                let list = companySelect.filter(item => item.name == val);
                if (list.length > 0) {
                    this.companyList = list[0].company;
                }
            },
            company(val) {
                this.maschine = null;
                this.models = null;
                this.buildRate = 0;
                let maschineSelect = this.$t('maschineList');
                let list = maschineSelect.filter(item => item.name == val);
                if (list.length > 0) {
                    this.models = list[0].model
                }
            },
            maschine(val) {
                if (this.models) {
                    let maschine = this.models.filter(item => item.name == val)[0];
                    this.currentModel = maschine;
                    this.maxRate = parseInt(maschine.buildRate)
                    this.buildRate = parseInt(maschine.buildRate)
                    this.modelPrice = maschine.price
                    this.ech = maschine.ECH
                    this.gch = maschine.GCH
                    this.flaeche = maschine.Flaeche
                }
            },
            material(val) {
                this.materialPrice = this.$t('materialList').filter(item => item.name == val)[0].value;
            }
        },
        computed: {
            processList() {
                this.process = null
                return this.$t('processList')
            },
            maschineList() {
                if (this.models) {
                    let maschineList = [];
                    this.models.map((item) => {
                        maschineList.push(item.name)
                    })
                    return maschineList;
                }
            },
            materialList() {
                let materialList = [];
                this.$t('materialList').map((item) => {
                    materialList.push(item.name)
                })
                return materialList;
            }
        },
        methods: {
            calculate() {
                if (this.process == null) {
                    this.error = true
                    this.errorInfo = this.$t('errorInfo.process')
                    return false
                }
                if (this.company == null) {
                    this.error = true
                    this.errorInfo = this.$t('errorInfo.company')
                    return false
                }
                if (this.maschine == null) {
                    this.error = true
                    this.errorInfo = this.$t('errorInfo.maschine')
                    return false
                }
                if (this.material == null) {
                    this.error = true
                    this.errorInfo = this.$t('errorInfo.material')
                    return false
                }
                if (this.buildRate == null) {
                    this.error = true
                    this.errorInfo = this.$t('errorInfo.rate')
                    return false
                }
                if (this.volume == null) {
                    this.error = true
                    this.errorInfo = this.$t('errorInfo.volume')
                    return false
                }
                this.buildTime = this.volume / this.buildRate;
                this.rcy = parseFloat(this.flaeche) * 1.2 * 7.5 * 12;
                let cMaschine = (((parseFloat(this.modelPrice) / 6.0) * (1.15) + parseFloat(this.rcy)) / (365.0 * 24.0 * 0.9)) * this.buildTime;
                this.cMaschine = cMaschine.toFixed(2)
                // console.log(cMaschine.toFixed(2))
                let cMaterial = this.volume * this.materialPrice * 1.1
                this.cMaterial = cMaterial.toFixed(2)
                // console.log(cMaterial.toFixed(2))
                let cElektricity = this.ech * this.buildTime
                this.cElektricity = cElektricity.toFixed(2)
                // console.log(cElektricity.toFixed(2))
                let cGas = this.gch * this.buildTime
                this.cGas = cGas.toFixed(2)
                // console.log(cGas.toFixed(2))
                let cLabor = 35.9 * (parseFloat(this.buildTime) / 50);
                this.cLabor = cLabor.toFixed(2)
                // console.log(cLabor.toFixed(2))
                let cTotal = cMaschine + cMaterial + cElektricity + cGas + cLabor
                this.cTotal = cTotal.toFixed(2)
                // console.log(cTotal.toFixed(2))
                let result = new Object()
                result['id'] = uuid()
                result['type'] = 'normal'
                result['process'] = this.process
                result['company'] = this.company
                result['maschine'] = this.maschine
                result['material'] = this.material
                result['buildRate'] = this.buildRate
                result['volume'] = this.volume
                result['cMaschine'] = this.cMaschine
                result['cMaterial'] = this.cMaterial
                result['cElektricity'] = this.cElektricity
                result['cGas'] = this.cGas
                result['cLabor'] = this.cLabor
                result['cTotal'] = this.cTotal
                setHistory(result)
                this.$router.push({
                    name: 'result', query: {
                        process: this.process,
                        company: this.company,
                        maschine: this.maschine,
                        material: this.material,
                        volume: this.volume,
                        cMaschine: this.cMaschine,
                        cMaterial: this.cMaterial,
                        cElektricity: this.cElektricity,
                        cGas: this.cGas,
                        cLabor: this.cLabor,
                        cTotal: this.cTotal,
                    }
                })
            },
            importStl() {
                this.$refs.uploadFile.dispatchEvent(new MouseEvent('click'))
            },
            getFile(e) {
                $("#stlCanvas").empty()
                let stlFile = e.target.files[0]
                let windowURL = window.URL || window.webkitURL;
                let url = windowURL.createObjectURL(stlFile);
                $("#stlCanvas").show()
                let width = $("#stlCanvas").innerWidth()
                let height = $("#stlCanvas").innerHeight()
                this.draw(url, width, height)
            },
            draw(url, width, height) {
                var stlCanvas = document.getElementById("stlCanvas");
                draw(url, stlCanvas, width, height)
            }
        },
    }
</script>

<style scoped>
    .van-grid {
        margin-top: 10px;
    }

    .confirmBtn {
        width: calc(100% - 20px);
        margin: 10px 10px 0px 10px;
    }

    .importBtn {
        width: calc(100% - 20px);
        margin: 0px 10px 0px 10px;
    }
</style>
<style lang="scss">
    .q-item__label {
        word-break: break-all;
    }

    .q-field__native {
        span {
            word-break: break-all;
        }
    }
</style>
