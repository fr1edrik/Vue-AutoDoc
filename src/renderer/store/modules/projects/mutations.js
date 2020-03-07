import { UPDATE_PROJECTS } from './mutation-types'

export const mutations = {
	[UPDATE_PROJECTS](state, payload) {
		state.projects = payload
	},
}
