import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import store from './store';   // Import the store
import vuetify from './plugins/vuetify'; // Path to your Vuetify plugin

Vue.config.productionTip = false;

new Vue({
  router, // Add the router
  store,  // Add the store
  vuetify,
  render: (h) => h(App)
}).$mount('#app');