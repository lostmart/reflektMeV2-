<script setup>
	import { useStore } from 'vuex'
	import shareBtn from '../assets/share-btn.svg'
	const store = useStore()
</script>

<template>
	<section class="flex items-end mt-10">
		<div class="flex items-end h-[283px] translate-x-6">
			<span class="block rotate-90 p-2">1/5</span>
		</div>
		<div
			class="img-container flex justify-center items-center overflow-hidden mx-auto w-[226px] h-[282.7px]">
			<img
				v-if="store.state.activeItem"
				:src="store.state.activeImg"
				alt="levis image"
				class="min-w-fit mx-auto" />
		</div>
		<button class="translate-x-[-14px]">
			<img :src="shareBtn" alt="share button" />
		</button>
	</section>
</template>
