import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;

if(window.mp == undefined){
  window.mp = {
    trigger(...args){
      window.console.log(`Event name: ${args[0]}`)
      let params = "";
      for (let index = 1; index < args.length; index++) {
        params += `${args[index]},`;        
      }
      window.console.log(`Params: ${params}`);
    }
  }
}

const app = new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

export default app;

global.app = app;
global.store = app.$store;