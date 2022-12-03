import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/tailwind.css'
import router from './router'

createApp(App).use(router).use(store).mount('#app')

export default function (Vue, { router, head, isClient }) {
	head.meta.push({
		key: 'og:description',
		name: 'og:description',
		content: `Tim Deschryver's experiences and thoughts on programming`,
	})
	head.meta.push({
		key: 'twitter:description',
		name: 'twitter:description',
		content: `Tim Deschryver's experiences and thoughts on programming`,
	})
}
