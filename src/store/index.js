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
		desktopZoom: false,
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
			state.shareModal = !state.shareModal
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
		toggleDesktopZoom(state, payload) {
			state.desktopZoom = payload
		},
	},
	actions: {},
	modules: {},
})
