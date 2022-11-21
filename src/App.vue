<script setup>
	import './assets/tailwind.css'
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
			v-if="store.state.showModal && !store.state.showFullScreenModal">
			<div class="block md:hidden">
				<!--- only shows in mobile    --->
				<ModalHeader />

				<ModalBody class="max-w-sm mx-auto" />

				<ModalThumbnails />

				<SizesComp class="mt-[10px]" />

				<ModalFooter />
			</div>

			<div class="hidden md:flex">
				<!--- only shows after  ('md': '768px')   --->
				<ModalBody class="w-1/2" />
				<div class="grid grid-cols-3 w-1/2">
					<ModalThumbnails />

					<div class="col-span-2 relative">
						<ModalHeader />

						<SizesComp />

						<ModalFooter class="absolute bottom-4 right-4" />
					</div>
				</div>
			</div>
		</primary-modal>

		<full-screen-modal
			class="absolute left-[50%] translate-x-[-50%] top-2"
			v-if="store.state.showFullScreenModal">
			<div class="flex items-center justify-center relative">
				<button
					class="absolute w-[40px] top-2 right-0 bg-white rounded-full p-2"
					@click="store.commit('toggleFullScreenModal', null)"
					aria-label="Close">
					<img :src="closeBtn" alt="close button" />
				</button>
				<img
					class="min-w-[835px]"
					:src="store.state.activeImg"
					alt="full screen size image" />
			</div>
		</full-screen-modal>
		<share-modal
			class="absolute left-[50%] translate-x-[-50%] top-2"
			v-if="store.state.showShareModal"></share-modal>
	</div>
</template>

<style scoped>
	footer {
		font-family: 'Helvetica Now Text ';
		font-weight: 300;
	}
</style>
