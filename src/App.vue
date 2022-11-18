<script setup>
	import './assets/tailwind.css'
	import { useStore } from 'vuex'
	import PrimaryModal from './views/PrimaryModal.vue'
	import ModalHeader from './components/ModalHeader.vue'
	import ModalBody from './components/ModalBody.vue'
	import ModalThumbnails from './components/ModalThumbnails.vue'
	import SizesComp from './components/SizesComp.vue'
	import ButtonComp from './components/ButtonComp.vue'
	import ModalFooter from './components/ModalFooter.vue'
	const store = useStore()
	const toggleModal = () => {
		store.commit('toggleModal', null)
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
	<div>
		<ButtonComp
			@click="toggleModal"
			class="mx-auto my-2 block p-4 border rounded-sm"
			btnMsg="See It In My Size" />
		<primary-modal
			class="absolute left-[50%] translate-x-[-50%]"
			v-if="store.state.showModal">
			<ModalHeader />

			<ModalBody />

			<ModalThumbnails />

			<SizesComp class="mt-[10px]" />

			<ModalFooter />
		</primary-modal>
	</div>
</template>

<style scoped>
	footer {
		font-family: 'Helvetica Now Text ';
		font-weight: 300;
	}
</style>
