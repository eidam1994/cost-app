import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@css/colors.scss'
import './quasar'
import VueI18n from 'vue-i18n'
import Echarts from 'echarts'
Vue.use(VueI18n)

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
