import { createStore } from 'vuex'

export default createStore({
	state: {
		showModal: true,
		activeItem: null,
		activeImg: '',
		mediaArray: [],
		activeMediaInd: 0,
		activeThumbnail: 0,
	},
	getters: {},
	mutations: {
		toggleModal(state) {
			state.showModal = !state.showModal
		},
		setActiveItem(state, payload) {
			state.activeItem = payload
		},
		setActiveImg(state, payload) {
			state.activeImg = payload
		},
		setMediaArray(state, payload) {
			state.mediaArray = payload
		},
		setActiveMediaInd(state, payload) {
			state.activeMediaInd = payload
		},
		setActiveThumbnail(state, payload) {
			state.activeThumbnail = payload
		},
	},
	actions: {},
	modules: {},
})
