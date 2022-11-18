import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ModalHeader from '@/components/ModalHeader.vue'
import store from '@/store/index'

//const localVue = createLocalVue()

//localVue.use(Vuex)

describe('ModalHeader.vue', () => {
	it('renders the title with its text', () => {
		const wrapper = shallowMount(ModalHeader, { store })
		const title = wrapper.get('h2')
		expect(title.text()).toContain('See it in my size')
	})
})
