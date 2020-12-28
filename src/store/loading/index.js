import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    showLoading: false,
    loadingStep: 'Загрузка..',
    loadingHistory: []
  },
  mutations: {
    toggleLoading(state, value) {
      state.showLoading = value;
    },
    setLoadingStep(state, value) {
      state.loadingStep = JSON.parse(value);
    },
    addLoadingHistory(state, value) {
      state.loadingHistory.push(value);
    }
  },
  actions: {

  }
}