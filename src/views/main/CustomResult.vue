<template>
    <q-layout view="lHh lpr lFf" container>
        <q-header elevated>
            <head-bar :title="$t('toolbar.result')" :back="true"></head-bar>
        </q-header>
        <q-page-container>
            <q-card style="margin: 10px" bordered class="my-card">
                <q-card-section>
                    <div class="text-h6">Information</div>
                </q-card-section>
                <q-separator/>
                <q-card-section>
                    <q-list dense class="rounded-borders">
                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('customOptions.model')}} : {{$route.query.model}}
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('customOptions.power')}} : {{$route.query.power}}
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('customOptions.gas')}} : {{$route.query.gas}}
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('customOptions.flasche')}} : {{$route.query.flasche}}
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('customOptions.material')}} : {{$route.query.material}}
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('customOptions.rate')}} : {{$route.query.rate}}
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('customOptions.volume')}} : {{$route.query.volume}}
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card>
            <q-card style="margin: 10px" bordered class="my-card">
                <q-card-section>
                    <div class="text-h6">{{$t('options.result')}}</div>
                </q-card-section>
                <q-separator/>
                <q-card-section>
                    <q-list dense class="rounded-borders">
                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('options.cMaschine')}}(€) : {{$route.query.cMaschine}}
                            </q-item-section>
                        </q-item>

                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('options.cMaterial')}}(€) : {{$route.query.cMaterial}}
                            </q-item-section>
                        </q-item>

                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('options.cElektricity')}}(€) : {{$route.query.cElektricity}}
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('options.cGas')}}(€) : {{$route.query.cGas}}
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('options.cLabor')}}(€) : {{$route.query.cLabor}}
                            </q-item-section>
                        </q-item>
                        <q-item v-ripple style="padding: 0px">
                            <q-item-section>
                                {{$t('options.cTotal')}}(€) : {{$route.query.cTotal}}
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
                <q-separator/>
                <div id="mainChart" style="width: 100%;height: 300px"></div>
                <div id="mainChart1" style="width: 100%;height: 270px"></div>
                <ul style="list-style: none">
                    <li>①:{{$t('options.cMaschine')}}</li>
                    <li>②:{{$t('options.cMaterial')}}</li>
                    <li>③:{{$t('options.cGas')}}</li>
                    <li>④:{{$t('options.cElektricity')}}</li>
                    <li>⑤:{{$t('options.cLabor')}}</li>
                </ul>
            </q-card>
        </q-page-container>
        <q-footer height-hint="150" bordered class="bg-white text-primary">
            <tool-bar :tab="'custom'"></tool-bar>
        </q-footer>
    </q-layout>
</template>

<script>
    export default {
        name: "CustomResult",
        components: {
            'head-bar': () => import('@components/HeadBar'),
            'tool-bar': () => import('@components/ToolBar')
        },
        methods: {
            drawTable() {
                var myChart = this.$echarts.init(document.getElementById('mainChart'));
                var option = {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    series: [
                        {
                            name: 'cost',
                            type: 'pie',
                            radius: '55%',
                            data: [
                                {value: parseFloat(this.$route.query.cMaschine), name: this.$t('options.cMaschine')},
                                {value: parseFloat(this.$route.query.cMaterial), name: this.$t('options.cMaterial')},
                                {value: parseFloat(this.$route.query.cGas), name: this.$t('options.cGas')},
                                {value: parseFloat(this.$route.query.cElektricity), name: this.$t('options.cElektricity')},
                                {value: parseFloat(this.$route.query.cLabor), name: this.$t('options.cLabor')},
                            ],

                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 200
                                }
                            },
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#6f1b03'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: '#6f1b03'
                                    }
                                }
                            }
                        }
                    ]
                }

                myChart.setOption(option);

                var myChart1 = this.$echarts.init(document.getElementById('mainChart1'));

                var option = {
                    title: {
                        text: '',
                        textStyle: {
                            color: '#6f1b03'
                        },
                        padding: [0, 0, 50, 50]
                    },
                    tooltip: {},
                    legend: {
                        type: 'plain',
                        top: '1%',
                        textStyle: {
                            color: '#6f1b03'
                        },
                        data: [
                            {
                                name: 'Cost',
                                textStyle: {
                                    color: '#6f1b03'
                                },
                            }
                        ]
                    },
                    xAxis: {
                        textStyle: {
                            color: '#6f1b03'
                        },
                        data: ["①", "②", "③", "④", "⑤"]
                    },
                    yAxis: {
                        name: 'cost(€)',
                        textStyle: {
                            color: '#6f1b03'
                        }
                    },
                    series: [{
                        name: 'Cost',
                        type: 'bar',
                        data: [parseFloat(this.$route.query.cMaschine),
                            parseFloat(this.$route.query.cMaterial),
                            parseFloat(this.$route.query.cGas),
                            parseFloat(this.$route.query.cElektricity),
                            parseFloat(this.$route.query.cLabor)],
                        itemStyle: {
                            normal: {
                                color: '#703c2d'
                            }
                        },
                    }]
                };

                myChart1.setOption(option);
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.drawTable()
            })
        }
    }
</script>

<style scoped>

</style>
