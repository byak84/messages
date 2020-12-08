import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {layout: 'main'},
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'empty'},
        // component: Login
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: {layout: 'empty'},
        // component: Login
        component: () => import('../views/Register')
    },
    {
        path: "*",
        meta: {layout: 'main'},
        component: {render: (h) => h("div", ["404! Page Not Found!"])},
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
