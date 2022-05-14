import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

import {fontAwesomeInit} from './utilities/font-awesome-includes';
import { VueReCaptcha } from 'vue-recaptcha-v3';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCNmY_vWcGlSdFSNGYimGBJF0svgPVVZ8M'
  }
})
Vue.use(VueReCaptcha, { siteKey: '6Lelrc8fAAAAAJwZc5kpoKcTOFaXqDbSGYoGy5AC' })

fontAwesomeInit();

new Vue({
  render: h => h(App),
}).$mount('#app')