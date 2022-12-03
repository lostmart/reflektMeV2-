import { createRouter, createWebHashHistory } from 'vue-router'
//import { useStore } from 'vuex'
import HomeView from '../views/HomeView.vue'
import store from '../store/index'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue'),
	},
	{
		path: '/share',
		name: 'share',
		component: () => import('../views/ShareModal.vue'),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	document.title = ` ${process.env.VUE_APP_TITLE} - ${to.name} `
	// console.log(document.querySelectorAll('meta')[6].content)
	let img = { txt: store.state.activeImg }
	// document.querySelectorAll('meta')[6].content = img
	document.querySelectorAll('meta')[6].setAttribute('content', img.txt)
	document.querySelectorAll('meta')[9].setAttribute('content', img.txt)
	next()
})

export default router
