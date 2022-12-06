<script setup>
	import { useStore } from 'vuex'
	const store = useStore()

	const changeActive = (img, indx) => {
		store.commit('setActiveImg', img)
		store.commit('setActiveThumbnail', indx)
		store.dispatch('userBehavior', {
			btn: 'thumbnails',
		})
	}
</script>

<template>
	<section class="mt-5 pb-4 border-b-2 border-lightGray md:border-none">
		<div class="flex justify-around md:flex-col md:h-full">
			<button
				v-if="store.state.activeImg"
				v-for="(img, indx) in store.state.activeItem.options"
				:key="indx"
				@click="changeActive(img.imgUrl, indx)"
				class="flex justify-center items-center truncate w-[91px] h-[115px] border-4 border-white relative translate-x-2"
				:class="{ 'active-btn': img.imgUrl === store.state.activeImg }">
				<div class="flex justify-center items-center w-full thumb-btn">
					<img :src="img.imgUrl" :alt="img.altTxt" class="min-w-[190px]" />
				</div>
			</button>
		</div>
	</section>
</template>

<style scoped>
	.active-btn {
		box-shadow: 0px 0px 0 2px #403e3f;
		z-index: 1050;
		border-radius: 2px;
	}
</style>
