<script setup>
	import { useStore } from 'vuex'
	import ModalHeader from '../components/ModalHeader.vue'
	const store = useStore()
</script>

<template>
	<div
		class="absolute left-[50%] translate-x-[-50%] top-2 inset-y-1 bg-white w-11/12 h-screen max-w-screen-sm md:max-w-xl">
		<ModalHeader />
		<div
			class="flex items-center justify-center overflow-hidden max-h-[422px] max-w-[315px] m-auto">
			<img
				:src="store.state.activeImg.smallOpt[store.state.activeThumbnail].hero"
				alt="reflektMe share image" />
		</div>
		<p class="mt-8 mx-auto max-w-[286px] text-center">
			Check out my Levis.com Reflektion for (insert product name and link here)
		</p>
		<button class="mt-8 block mx-auto text-center border p-4">Copy link</button>
	</div>
</template>
