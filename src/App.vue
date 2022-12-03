<script setup>
	import { ref } from 'vue'
	import { useStore } from 'vuex'
	import PrimaryModal from './views/PrimaryModal.vue'
	import FullScreenModal from './views/FullScreenModal.vue'
	import ShareModal from './views/ShareModal.vue'
	import ModalHeader from './components/ModalHeader.vue'
	import ModalBody from './components/ModalBody.vue'
	import ModalThumbnails from './components/ModalThumbnails.vue'
	import SizesComp from './components/SizesComp.vue'
	import ButtonComp from './components/ButtonComp.vue'
	import ModalFooter from './components/ModalFooter.vue'
	import closeBtn from './assets/x.svg'

	const store = useStore()
	const imageCont = ref()
	const toggleModal = () => {
		store.commit('toggleModal', null)
	}
	const zoomCoordData = ref({ zoomX: '', zoomY: '' })
	const ratio = 0.6367
	const handleZoom = (data) => {
		zoomCoordData.value.zoomX = 180 + data.zoomX / 2.8
		zoomCoordData.value.zoomY = data.zoomY / 2
	}
	/* data fetch */
	const fetchData = async () => {
		try {
			const response = await fetch('/data.json')
			const jsonData = await response.json()
			// console.log(jsonData.data)
			store.commit('setMediaArray', jsonData.data)
			store.commit('setActiveItem', jsonData.data[0])
			store.commit('setActiveImg', jsonData.data[0].options[0].imgUrl)
		} catch (err) {
			/* REVISAR ERROR HANDLERS !!!  */
			console.log(err, 'todo esta muy mal !!!')
		}
	}
	fetchData()
</script>

<template>
	<!--- 
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	-->
	<router-view />
</template>
