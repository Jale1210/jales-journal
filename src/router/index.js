import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/views/MainPage.vue";
import TopPage from "@/views/TopPage";
import SevenNotes from "@/views/SevenNotes";
import BluePage from "@/views/BluePage.vue";

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },


    {
      path: '/top',
      name: 'TopPage',
      component:  TopPage
    },

    {
        path: '/notes',
        name: 'SevenNotes',
        component: SevenNotes
    },
    {
        path: '/blue',
        name: 'BluePage',
        component: BluePage
    }

    // {
    //     path: '/blocked',
    //     name: 'BlockedCard',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/BlockedCard')
    // },
    // {
    //     path: '/blocked-acc',
    //     name: 'BlockedAccount',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/BlockedAccount')
    // },
    // {
    //     path: '*',
    //     name: 'Survey',
    //     component: () => import(/* webpackChunkName: "about" */ '../App.vue')
    // },


    // {
    //   path: '/home',
    //   name: 'Home',
    //
    //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    // },
    // {
    //   path: '/success',
    //   name: 'Success',
    //
    //   component: () => import(/* webpackChunkName: "about" */ '../views/Success.vue')
    // },
    // {
    //   path: '/notFound',
    //   name: 'notFound',
    //
    //   component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
    // },
    // {
    //   path: '/blocked',
    //   name: 'Blocked',
    //
    //   component: () => import(/* webpackChunkName: "about" */ '../views/Blocked.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
