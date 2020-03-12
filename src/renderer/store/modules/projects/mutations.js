import {
	UPDATE_PROJECTS,
	UPDATE_ACTIVE_PROJECT,
	UPDATE_PROJECTS_DIR_PATH,
} from './mutation-types'

export const mutations = {
	[UPDATE_PROJECTS](state, payload) {
		state.projects = payload
	},
	[UPDATE_ACTIVE_PROJECT](state, payload) {
		state.activeProject = payload
	},
	[UPDATE_PROJECTS_DIR_PATH](state, payload) {
		state.projectsDirPath = payload
	},
}
