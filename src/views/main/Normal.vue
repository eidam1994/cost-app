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
                    <q-input style="margin: 10px" color="teal" outlined v-model="buildRate" :label="$t('options.rate')">
                        <template v-slot:append>
                            <q-avatar>
                                <img src="@icons/rate.png">
                            </q-avatar>
                        </template>
                        <q-slider v-show="maxRate > 0" style="height: 100%" v-model="buildRate" :min="0" :max="maxRate"
                                  :step="0.1"/>
                    </q-input>
                    <q-input style="margin: 10px" color="teal" outlined v-model="volume" :label="$t('options.volume')">
                        <template v-slot:append>
                            <q-avatar>
                                <img src="@icons/volume.png">
                            </q-avatar>
                        </template>
                    </q-input>
                    <q-btn @click="importStl" class="importBtn" color="primary" outline icon="3d_rotation"
                           :label="$t('import')"/>
                    <input ref="uploadFile" @change="getFile" type="file" style="display:none"/>
                    <div ref="stlCanvas" id="stlCanvas" style="width:100%; height:300px;display:none"></div>
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
    import * as THREE from 'three'
    import $ from 'jquery'
    import HeadBar from "@components/HeadBar";
    import ToolBar from "@components/ToolBar";

    export default {
        name: "Home",
        components: {
            'head-bar': HeadBar,
            'tool-bar': ToolBar
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
                processList: this.$t('processList'),
                companyList: [],
                stlParams: {
                    stlFile: false,
                    width: 0,
                    height: 0,
                    renderer: null,
                    camera: null,
                    scene: null,
                    light: null,
                    controls: null,
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
                this.draw(url)
            },
            initRender() {
                this.stlParams.width = this.$refs.stlCanvas.clientWidth
                this.stlParams.height = this.$refs.stlCanvas.clientHeight
                this.stlParams.renderer = new THREE.WebGLRenderer({antialias: true});
                this.stlParams.renderer.setSize(this.stlParams.width, this.stlParams.height);
                //告诉渲染器需要阴影效果
                this.stlParams.renderer.setClearColor(0xffffff);
                this.$refs.stlCanvas.appendChild(this.stlParams.renderer.domElement);
            },
            initCamera() {
                this.stlParams.camera = new THREE.PerspectiveCamera(45, this.stlParams.width / this.stlParams.height, 0.1, 1000);
                this.stlParams.camera.position.set(0, 40, 50);
                this.stlParams.camera.lookAt(new THREE.Vector3(0, 0, 0));
            },
            initScene() {
                this.stlParams.scene = new THREE.Scene();
            },
            initLight() {
                this.stlParams.scene.add(new THREE.AmbientLight(0x444444));

                this.stlParams.light = new THREE.PointLight(0xffffff);
                this.stlParams.light.position.set(0, 50, 50);

                //告诉平行光需要开启阴影投射
                this.stlParams.light.castShadow = true;

                this.stlParams.scene.add(this.stlParams.light);
            },
            initModel(url) {
                //辅助工具
                var helper = new THREE.AxesHelper(50);
                this.stlParams.scene.add(helper);
                var STLLoader = require('three-stl-loader')(THREE)
                var loader = new STLLoader()
                let volume = this.volume
                let scene = this.stlParams.scene
                let that = this
                loader.load(url, function (geometry) {
                    if (geometry instanceof THREE.BufferGeometry) {
                        geometry = new THREE.Geometry().fromBufferGeometry(geometry);
                    }

                    //尺寸
                    geometry.computeBoundingBox();

                    function vFun(p1, p2, p3) {
                        //借助threejs的Vector3的叉乘、点乘方法进行计算
                        return p1.clone().cross(p2).dot(p3) / 6; //p1叉乘p2点乘p3除以6
                    }

                    // 声明一个变量表示几何体的体积
                    var V = 0.0;
                    // 几何体三角形索引
                    for (var i = 0; i < geometry.faces.length; i++) {
                        // 几何体三角形索引
                        var index0 = geometry.faces[i].a;
                        var index1 = geometry.faces[i].b;
                        var index2 = geometry.faces[i].c;
                        // 通过索引访问三角形顶点坐标值
                        var p0 = geometry.vertices[index0];
                        var p1 = geometry.vertices[index1];
                        var p2 = geometry.vertices[index2];
                        //使用下面的函数，并不会改变p0, p1, p2引用指向的geo顶点坐标值
                        //三角形与坐标原点构成的四面体体积累计计算
                        V += vFun(p0, p1, p2);

                    }
                    volume = (V / 1000.0).toFixed(2);
                    that.updateVolume(volume)
                    //创建纹理
                    var mat = new THREE.MeshLambertMaterial({color: 0x00ffff});
                    var mesh = new THREE.Mesh(geometry, mat);

                    mesh.rotation.x = -0.5 * Math.PI; //将模型摆正
                    mesh.scale.set(0.5, 0.5, 0.5); //缩放
                    geometry.center(); //居中显示
                    scene.add(mesh);

                    var boundingBox = geometry.boundingBox;
                    console.log('x_y_z:', boundingBox.max);//实际长宽高，取2x,2y,2z。
                });
            },
            initControls() {
                var OrbitControls = require('three-orbit-controls')(THREE)
                this.stlParams.controls = new OrbitControls(this.stlParams.camera, this.stlParams.renderer.domElement);
                // 如果使用animate方法时，将此函数删除
                //controls.addEventListener( 'change', render );
                // 使动画循环使用时阻尼或自转 意思是否有惯性
                this.stlParams.controls.enableDamping = true;
                //动态阻尼系数 就是鼠标拖拽旋转灵敏度
                //controls.dampingFactor = 0.25;
                //是否可以缩放
                this.stlParams.controls.enableZoom = true;
                //是否自动旋转
                this.stlParams.controls.autoRotate = true;
                this.stlParams.controls.autoRotateSpeed = 0.5;
                //设置相机距离原点的最远距离
                this.stlParams.controls.minDistance = 1;
                //设置相机距离原点的最远距离
                this.stlParams.controls.maxDistance = 200;
                //是否开启右键拖拽
                this.stlParams.controls.enablePan = true;
            },
            render() {
                this.stlParams.renderer.render(this.stlParams.scene, this.stlParams.camera);
            },
            onWindowResize() {
                this.stlParams.camera.aspect = this.stlParams.width / this.stlParams.height;
                this.stlParams.camera.updateProjectionMatrix();
                this.render();
                this.stlParams.renderer.setSize(this.stlParams.width, this.stlParams.height);
            },
            animate() {
                //更新控制器
                this.render();

                this.stlParams.controls.update();

                requestAnimationFrame(this.animate);
            },
            draw(url) {
                this.initRender();
                this.initScene();
                this.initCamera();
                this.initLight();
                this.initModel(url);
                this.initControls();
                this.animate();
                window.onresize = this.onWindowResize;
            },
            updateVolume(volume) {
                this.volume = volume;
            }
        },
        mounted() {
        }
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
