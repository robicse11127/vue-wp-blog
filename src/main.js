import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';

import Page from './components/Page.vue'
import Posts from './components/Posts.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
	{ path: '/', component: Posts },
	{ path: '/page', component: Page },
]

const router = new VueRouter({
	mode: 'history',
	base: __dirname,	
	routes
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')