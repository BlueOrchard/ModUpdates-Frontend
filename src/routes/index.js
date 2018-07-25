import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Browse from './router-components/Browse.vue';
import Home from './router-components/Home.vue';
import Post from './router-components/Post.vue';

const routes = [
    { path: '/', component: Home},
    { path: '/browse', component: Browse},
    { path: '/post', component: Post}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;