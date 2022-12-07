<script setup>
	import { ref } from 'vue'
	import { useStore } from 'vuex'

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
