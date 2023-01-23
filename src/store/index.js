import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
	state: {
		valid: false,
		showModal: false,
		showFullScreenModal: false,
		shareModal: false,
		zoomedImg: '',
		activeImg: null,
		mediaArray: [],
		activeMediaInd: 0,
		activeThumbnail: 0,
		desktopZoom: false,
		fullScreenImg: '',

		// agent data
		userData: {
			clientID: null,
			productId: null,
			trackingId: null,
		},

		/*  URLS   */
		url_meta: '',
		url_assets: '',
		url_widget: '',
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
		setUserData(state, payload) {
			state.userData = payload
		},
		setValid(state, payload) {
			state.valid = payload
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
				userId: state.userData.userID,
				localTime: formatDate,
				productId: state.userData.productId,
				trackingId: state.userData.trackingId,
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
