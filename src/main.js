import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import ToDo from './components/ToDo';
import Completed from './components/Completed';

import store from './store';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ToDo },
    { path: '/completed', component: Completed }
  ]
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
