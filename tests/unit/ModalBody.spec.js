import { shallowMount } from '@vue/test-utils'
import ModalBody from '@/components/ModalBody.vue'

describe('ModalBody.vue', () => {
	it('renders the main/active image on the primary modal and share btn', () => {
		const wrapper = shallowMount(ModalBody)
		const img = wrapper.findAll('img')
		expect(img.length).toBe(2)
	})
})
