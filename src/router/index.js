import Vue from 'vue'
import Router from 'vue-router'
import useElementUI from '../components/useElementUI.vue'
import login from '../components/login.vue'
import home from '../components/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/useElementUI', component: useElementUI },
    { path: '/login', name: 'login', component: login },
    { path: '/home', name: 'home', component: home },
    { path: '/', redirect: '/home' }
  ]
})
