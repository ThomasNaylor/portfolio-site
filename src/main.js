import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import * as firebase from 'firebase';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_googleMapsKey,
    libraries: 'places'
  }
});

Vue.use(VueAxios, axios);

var config = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.VUE_APP_authDomain,
  databaseURL: process.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId
};

firebase.initializeApp(config);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
