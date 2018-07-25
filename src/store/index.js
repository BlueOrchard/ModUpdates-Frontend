import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

const apiCalls = {
    namespaced: true,
    state: {
        apiDomain: "api.modupdates.com"
    },
};

export default new VueX.Store({
    modules: {
        apiCalls: apiCalls
    }
});