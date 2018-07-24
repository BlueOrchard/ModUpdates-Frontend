import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Browse from './router-components/Browse.vue';
import Home from './router-components/Home.vue';

const routes = [
    { path: '/', component: Home},
    { path: '/browse', component: Browse}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;