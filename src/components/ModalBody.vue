<script setup>
	import { useStore } from 'vuex'
	import shareBtn from '../assets/share-btn.svg'
	const store = useStore()
</script>

<template>
	<section class="flex items-end mt-6 md:block md:relative">
		<div
			class="flex items-end h-[283px] translate-x-6 md:absolute z-10 md:bottom-0 md:-left-[1em] md:bg-[#ffffff87] md:h-full">
			<span v-if="store.state.activeItem" class="block rotate-90 p-2">
				{{ store.state.activeThumbnail + 1 }} /
				{{ store.state.activeItem.options.length }}
			</span>
		</div>
		<div
			class="img-container flex justify-center items-center overflow-hidden mx-auto w-[226px] max-w-[405px] h-[282.7px] md:relative md:w-full md:h-full md:top-0">
			<img
				v-if="store.state.activeItem"
				:src="store.state.activeImg"
				alt="levis image"
				class="min-w-fit mx-auto" />
		</div>
		<button
			class="translate-x-[-10px] md:absolute md:transform-none right-4 top-2">
			<img :src="shareBtn" alt="share button" />
		</button>
	</section>
</template>
