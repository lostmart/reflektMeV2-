import { createStore } from 'vuex'

export default createStore({
	state: {
		showModal: true,
		showFullScreenModal: false,
		shareModal: false,
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
		toggleFullScreenModal(state) {
			state.showFullScreenModal = !state.showFullScreenModal
		},
		toggleShareModal(state) {
			state.showShareModal = !state.showShareModal
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
