import Vue from 'vue';
import VueX from 'vuex';

import apiCalls from './modules/apiCalls.js';
import singlePost from './modules/singlePost.js';

Vue.use(VueX);

export default new VueX.Store({
    modules: {
        singlePost: singlePost,
        apiCalls: apiCalls
    }
});