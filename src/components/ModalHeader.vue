<script setup>
	import { useStore } from 'vuex'
	import icon from '../assets/levis.svg'
	import closeBtn from '../assets/x.svg'
	const store = useStore()
	const haddleClick = () => {
		store.state.showFullScreenModal
			? store.commit('toggleModal', null)
			: store.commit('toggleShareModal', null),
			store.commit('toggleModal', null)
	}
</script>

<template>
	<header>
		<div class="flex justify-end items-center relative">
			<img
				:src="icon"
				alt="Levis Icon"
				class="absolute left-[51%] translate-x-[-50%]" />
			<button @click="haddleClick" class="w-[40px] p-2 m-2" aria-label="Close">
				<img :src="closeBtn" alt="close button" />
			</button>
		</div>
		<h2 class="text-center text-redPrimary text-lg uppercase font-bold">
			See it in my size
		</h2>
	</header>
</template>
