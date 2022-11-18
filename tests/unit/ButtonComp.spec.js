import { mount } from '@vue/test-utils'
import ButtonComp from '@/components/ButtonComp.vue'

describe('ButtonComp.vue', () => {
	it('renders the "see it in my size" button ', () => {
		const wrapper = mount(ButtonComp, {
			props: { btnMsg: 'See It In My Size' },
		})
		expect(wrapper.text()).toContain('See It In My Size')
	})
})
