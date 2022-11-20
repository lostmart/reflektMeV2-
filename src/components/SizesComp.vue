<script setup>
	import { useStore } from 'vuex'
	const store = useStore()
	const handleChange = (num) => {
		store.commit('setActiveItem', store.state.mediaArray[num])
		store.commit('setActiveImg', store.state.activeItem.options[0].imgUrl)
		store.commit('setActiveMediaInd', num)
		store.commit('setActiveThumbnail', 0)
	}
</script>

<template>
	<section class="w-full p-6">
		<div class="flex justify-evenly flex-wrap gap-y-4 gap-x-2">
			<button
				v-for="(btn, ind) in store.state.mediaArray"
				class="w-[48.3px] h-[48.3px] border-brandDarkGray rounded-sm"
				:class="{
					disabled: btn.options.length === 0,
					border: ind === store.state.activeMediaInd,
				}"
				@click="handleChange(ind)"
				:disabled="btn.options.length === 0">
				{{ btn.size }}
			</button>
		</div>
	</section>
</template>

<style scoped>
	.disabled {
		text-decoration: line-through;
		color: #c5b7b7;
	}
</style>
