import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
	state: {
		showModal: true,
		showFullScreenModal: false,
		shareModal: false,
		activeItem: null,
		zoomedImg: '',
		activeImg: '',
		mediaArray: [],
		activeMediaInd: 0,
		activeThumbnail: 0,
		desktopZoom: false,
		fullScreenImg: '',
		// agent data
		userID: Math.floor(Math.random() * 1000000),
		productId: 'temporary product ID',
		trackingId: 'some tracking ID',
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
		setZoomedImg(state, payload) {
			state.zoomedImg = payload
		},
		setFullScreenImg(state, payload) {
			state.fullScreenImg = payload
		},
	},
	actions: {
		async userBehavior({ state }, payload) {
			const currentDate = new Date()
			const currentMonth = currentDate.getMonth() + 1
			const currentDay = currentDate.getDate()
			const currentYear = currentDate.getFullYear()
			let [hour, minute] = currentDate.toLocaleTimeString('en-US').split(/:| /)

			const formatDate = `${currentMonth}/${currentDay}/${currentYear} at ${hour}:${minute}`
			const data = {
				...payload,
				userId: state.userID,
				localTime: formatDate,
				productId: state.productId,
				trackingId: state.trackingId,
			}
			try {
				const res = await axios.post('http://localhost:3000/', data)
			} catch (err) {
				console.log(err, 'not able to dispatch userBehavior')
			}
		},
	},
	modules: {},
})
