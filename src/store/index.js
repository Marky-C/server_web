import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import loading from './loading/index'

export default new Vuex.Store({
    namespaced: true,
    state: {
        version: "build 0.0.271412 Pre-Alpha"
    },
    mutations: {
        setVersion(state, value) {
            state.version = value;
        }
    },
    actions: {

    },
    modules: {
        loading
    }
})