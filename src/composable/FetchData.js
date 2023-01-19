import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import idArrays from './idArray'

console.log(idArrays)

const fetchData = () => {
	const route = useRoute()
	const store = useStore()
	const media = ref([])
	const error = ref(null)

	const userData = {
		clientId: route.query.clientId,
		productId: route.query.productId,
		trackingId: route.query.trackingId,
	}

	const load = async () => {
		try {
			// const response = await fetch('/data.json')
			// const userId = store.state.clientId
			const remote_url = `https://staging-meta.reflektme.app/${userData.clientId}/GORS1.json`

			const local_url = '/new-data.json'
			const response = await fetch(remote_url)
			if (!response.ok) {
				throw Error('no data available')
			}

			const jsonData = await response.json()
			console.log(jsonData)
			store.commit('setMediaArray', jsonData.data)
			store.commit('setActiveImg', jsonData.data[0])
		} catch (err) {
			error.value = err.message
			alert('no data from server')
			console.log(error.value)
		}
	}

	return { media, error, load }
}

export default fetchData

/*
versiones de imagenes


hero="$basename-hero.webp"
thumbnail="$basename-thumbnail.webp"
fullscreen="$basename-fullscreen.webp"
zoom="$basename-zoom.webp"



*/
