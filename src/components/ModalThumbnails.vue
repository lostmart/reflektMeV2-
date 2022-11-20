<script setup>
	import { useStore } from 'vuex'
	const store = useStore()
	const imgs = ['/imgs/img-01.jpeg', '/imgs/img-02.jpeg', '/imgs/img-03.jpeg']

	const changeActive = (img) => {
		store.commit('setActiveImg', img)
	}
</script>

<template>
	<section class="mt-5 pb-4 border-b-2 border-lightGray">
		<div class="flex justify-around md:flex-col md:h-full">
			<button
				v-if="store.state.activeImg"
				v-for="(img, indx) in store.state.activeItem.options"
				:key="indx"
				@click="changeActive(img.imgUrl)"
				class="flex justify-center items-center truncate w-[113px] h-[113px] border border-black">
				<div class="flex justify-center items-center w-[105px]">
					<img :src="img.imgUrl" :alt="img.altTxt" class="min-w-[255px]" />
				</div>
			</button>
		</div>
	</section>
</template>
