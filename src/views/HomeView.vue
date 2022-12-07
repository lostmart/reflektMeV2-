<script setup>
	import { ref } from 'vue'
	import { useStore } from 'vuex'
	import PrimaryModal from './PrimaryModal.vue'
	import FullScreenModal from './FullScreenModal.vue'
	// import ShareModal from './ShareModal.vue'
	import ModalHeader from '../components/ModalHeader.vue'
	import ModalBody from '../components/ModalBody.vue'
	import ModalThumbnails from '../components/ModalThumbnails.vue'
	import SizesComp from '../components/SizesComp.vue'
	import ButtonComp from '../components/ButtonComp.vue'
	import ModalFooter from '../components/ModalFooter.vue'
	import closeBtn from '../assets/x.svg'
	const store = useStore()
	const imageCont = ref()
	const toggleModal = () => {
		store.commit('toggleModal', null)
	}
	const zoomCoordData = ref({ zoomX: '', zoomY: '' })
	const ratio = 0.6367
	const handleZoom = (data) => {
		zoomCoordData.value.zoomX = -35 + data.zoomX * 2.7
		zoomCoordData.value.zoomY = -80 + data.zoomY * 3
	}
	/* data fetch */
	const fetchData = async () => {
		try {
			// const response = await fetch('/data.json')
			const response = await fetch('/new-data.json')
			const jsonData = await response.json()
			console.log(jsonData.data)
			store.commit('setMediaArray', jsonData.data)
			store.commit('setActiveItem', jsonData.data[0])
			store.commit('setActiveImg', jsonData.data[0])
		} catch (err) {
			/* REVISAR ERROR HANDLERS !!!  */
			console.log(err, 'todo esta muy mal !!!')
		}
	}
	fetchData()
</script>

<template>
	<div>
		<transition name="mainTransition">
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
					<ModalBody @zoomCoord="handleZoom" class="w-1/2" />
					<div v-if="!store.state.desktopZoom" class="grid grid-cols-3 w-1/2">
						<ModalThumbnails />
						<div class="col-span-2 relative">
							<ModalHeader />
							<SizesComp />
							<ModalFooter class="absolute bottom-4 right-4" />
						</div>
					</div>
					<!---  ZOOMED CONTAINER  -->
					<div
						v-if="store.state.desktopZoom"
						class="h-[35rem] w-1/2 max-w-[605px] bg-slate-300 flex items-center justify-center overflow-hidden relative"
						ref="imageCont">
						<div
							class="w-full h-full zoomedImg"
							:style="{
								backgroundImage: 'url(' + store.state.zoomedImg + ')',
								backgroundPosition:
									'-' +
									zoomCoordData.zoomX +
									'px -' +
									zoomCoordData.zoomY +
									'px',
							}"></div>
						<!--- 
						<img
						class="absolute min-w-[1090px]"
						:style="{
							transform:
							'translate(-' +
							zoomCoordData.zoomX +
							'px,  -' +
							+zoomCoordData.zoomY +
							'px) scale(2)',
						}"
						:src="store.state.activeImg"
						alt="see it in my size" />
					-->
					</div>
				</div>
			</primary-modal>
		</transition>

		<full-screen-modal
			class="absolute left-[50%] translate-x-[-50%] top-2"
			v-if="store.state.showFullScreenModal">
			<div
				class="flex items-center justify-center relative max-w-[375px] overflow-hidden m-auto">
				<button
					class="absolute w-[40px] top-2 right-2 bg-white rounded-full p-2"
					@click="store.commit('toggleFullScreenModal', null)"
					aria-label="Close">
					<img :src="closeBtn" alt="close button" />
				</button>
				<img
					class="min-w-[835px]"
					:src="store.state.activeImg.smallOpt.hero"
					alt="full screen size image" />
			</div>
		</full-screen-modal>
		<!---
			<share-modal
			class="absolute left-[50%] translate-x-[-50%] top-2"
			v-if="store.state.shareModal"></share-modal>
		--></div>

	<ButtonComp
		@click="toggleModal"
		class="mx-auto my-2 block p-4 border rounded-sm"
		btnMsg="See It In My Size" />
	<router-view />
</template>

<style scoped>
	.zoomedImg {
		background-repeat: no-repeat;
		transform: scale(2) translate(90px, 139px);
	}
	footer {
		font-family: 'Helvetica Now Text ';
		font-weight: 300;
	}
	/*  transitions   */
	.mainTransition-enter-active {
		animation: finished 0.5s reverse ease-in-out;
	}
	.mainTransition-leave-active {
		animation: finished 0.5s ease-in-out;
	}
	@keyframes finished {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			top: -100px;
		}
	}
</style>
