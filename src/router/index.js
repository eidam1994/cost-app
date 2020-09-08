import Vue from 'vue'
import VueRouter from 'vue-router'
import Normal from "@views/main/Normal";
import Custom from "@views/main/Custom";
import History from "@views/main/History";
import Result from "@views/main/Result";
import CustomResult from "@views/main/CustomResult";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'normal',
        component: Normal,
        meta: {
            isIndex: true
        }
    },
    {
        path: '/custom',
        name: 'custom',
        component: Custom,
        meta: {
            isIndex: true
        }
    },
    {
        path: '/history',
        name: 'history',
        component: History,
        meta: {
            isIndex: true
        }
    },
    {
        path: '/result',
        name: 'result',
        component: Result,
        meta: {
            isIndex: false
        }
    }
    ,
    {
        path: '/customResult',
        name: 'customResult',
        component: CustomResult,
        meta: {
            isIndex: false
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
