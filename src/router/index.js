import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
		path: '/primary',
		name: 'primary',
		component: () => import('../views/PrimaryModal.vue'),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	console.log(to)
	document.title = ` ${process.env.VUE_APP_TITLE} - ${to.name} `
	console.log(document.querySelectorAll('meta')[2])
	next()
})

export default router
