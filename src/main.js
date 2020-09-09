import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@css/colors.scss'
import './quasar'
import VueI18n from 'vue-i18n'
import Echarts from 'echarts'
import VueCordova from 'vue-cordova'
Vue.use(VueCordova)
Vue.use(VueI18n)

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
    var cordovaScript = document.createElement('script')
    cordovaScript.setAttribute('type', 'text/javascript')
    cordovaScript.setAttribute('src', 'cordova.js')
    document.body.appendChild(cordovaScript)
}
//测试的
Vue.cordova.on('deviceready', () => {
    console.log('Cordova : device is ready !');
    console.log('Vue.cordova :', Vue.cordova);
});

const i18n = new VueI18n({
    locale: 'en',    // 语言标识
    messages: {
        'en': require('@lang/en'),   // 英文语言包
        'de': require('@lang/de')    // 德语语言包
    }
})
Vue.prototype.$echarts = Echarts

Vue.config.productionTip = false


new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')
