import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
//import idArrays from './idArray'
import Media from '../models/DataModel'

//console.log(idArrays)

const fetchData = () => {
	const route = useRoute()
	const store = useStore()
	const media = ref([])
	const error = ref(null)

	const localUserData = {
		clientId: route.query.clientId,
		productId: route.query.productId,
		trackingId: route.query.trackingId,
	}

	store.commit('setUserData', localUserData)

	const load = async () => {
		try {
			const remote_url = `https://staging-meta.reflektme.app/${localUserData.clientId}/GORS1.json`

			// const local_url = '/new-data.json'
			const response = await fetch(remote_url)
			if (!response.ok) {
				throw Error('no data available')
			}

			/*
			code for the new version with json file
			*/

			const jsonData = await response.json()
			let localMediaArr = []

			// data refacturing to accommodate date to the API
			jsonData.variants.forEach((media) => {
				const photo = new Media(media)
				console.log(photo.demoMedia)
				localMediaArr.push(photo.demoMedia)
			})

			store.commit('setMediaArray', localMediaArr)
			store.commit('setActiveImg', localMediaArr[0])
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
