import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import ToDo from './components/ToDo';
import Completed from './components/Completed';

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
  render: h => h(App),
}).$mount('#app')
