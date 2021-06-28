import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import Vuex from 'vuex'
import store from './store'
import App from './App.vue';
// Front-end import
import './plugins/bootstrap-vue';
// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'
// Graph lib
import HighchartsVue from 'highcharts-vue';
// Logic and data processing
import Game from './app/game'

// Generate the frontend
Vue.config.productionTip = false;
Vue.use(HighchartsVue);
Vue.use(Vuex);
Vue.use(LightBootstrap)

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

Game.load();

// If I need something done when ALL the request have been processed
// For example, display all data loaded or whatever. left here for later
// Promise.all([<list all requests here>]).then( () => {
//     // do some work
// }) 
// // debugger;
