import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@css/colors.scss'
import './quasar'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'en',    // 语言标识
    messages: {
        'en': require('@lang/en'),   // 英文语言包
        'de': require('@lang/de')    // 德语语言包
    }
})

Vue.config.productionTip = false

// 路由拦截器

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')