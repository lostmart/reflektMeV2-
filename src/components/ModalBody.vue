<script setup>
	import { ref } from 'vue'
	import { useStore } from 'vuex'
	import shareBtn from '../assets/share-btn.svg'
	import { useRouter } from 'vue-router'

	const router = useRouter()

	const emit = defineEmits(['zoomCoord'])

	const store = useStore()

	const image = ref()

	const toggleFullScreen = () => {
		store.commit('toggleFullScreenModal', true)
		store.commit('toggleDesktopZoom', false)
		store.dispatch('userBehavior', {
			btn: 'fullScreen',
		})
	}

	const handleShareClick = (e) => {
		e.stopPropagation()
		store.commit('toggleDesktopZoom', false)
		router.push('/share')
		store.dispatch('userBehavior', {
			btn: 'share',
		})
	}

	const triggerZoom = (e) => {
		const img = image.value.getBoundingClientRect()
		const zoomX = e.pageX - img.left
		const zoomY = e.pageY - img.top
		emit('zoomCoord', { zoomX, zoomY })
	}
</script>

<template>
	<section class="flex items-end mt-6 md:block md:relative">
		<div
			class="flex items-end h-[283px] translate-x-2 md:absolute z-50 md:bottom-0 md:-left-[1em] md:bg-[#ffffff87] md:h-full">
			<span v-if="store.state.activeItem" class="block rotate-90 pl-1 pb-2">
				{{ store.state.activeThumbnail + 1 }} /
				{{ store.state.activeItem.options.length }}
			</span>
		</div>
		<div
			role="button"
			aria-pressed="false"
			@click="toggleFullScreen"
			@mousemove="triggerZoom"
			@mouseenter="store.commit('toggleDesktopZoom', true)"
			@mouseleave="store.commit('toggleDesktopZoom', false)"
			class="img-container flex justify-center items-center overflow-hidden mx-auto w-[255px] max-w-[405px] h-[340px] md:relative md:w-full md:h-full md:top-0"
			ref="image">
			<img
				v-if="store.state.activeItem"
				:src="store.state.activeImg"
				alt="levis image"
				@onmousemove="triggerZoom(e)"
				class="min-w-fit mx-auto z-40" />
			<button
				@click="handleShareClick"
				class="md:translate-x-[-10px] md:absolute md:transform-none right-[1em] top-[1.2em] z-50">
				<img :src="shareBtn" alt="share button" />
			</button>
		</div>
	</section>
</template>
