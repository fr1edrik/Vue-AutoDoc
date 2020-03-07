import { UPDATE_PROJECTS, UPDATE_ACTIVE_PROJECT } from './mutation-types'

export const mutations = {
	[UPDATE_PROJECTS](state, payload) {
		state.projects = payload
	},
	[UPDATE_ACTIVE_PROJECT](state, payload) {
		state.activeProject = payload
	},
}
