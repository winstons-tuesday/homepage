import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

import {fontAwesomeInit} from './utilities/font-awesome-includes';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyApamJf1aPBGHlwmtKJ0qGskuap7X2PLmc'
  }
})

fontAwesomeInit();

new Vue({
  render: h => h(App),
}).$mount('#app')
