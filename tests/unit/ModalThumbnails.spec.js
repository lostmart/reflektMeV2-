import { shallowMount } from '@vue/test-utils'
import ModalThumbnails from '@/components/ModalThumbnails.vue'

describe('ModalThumbnails.vue', () => {
	it('renders three thumbnails', () => {
		const wrapper = shallowMount(ModalThumbnails)
		const img = wrapper.findAll('img')
		expect(img.length).toBe(3)
	})
})
