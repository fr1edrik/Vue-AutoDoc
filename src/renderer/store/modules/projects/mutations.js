import {
	UPDATE_PROJECTS,
	UPDATE_ACTIVE_PROJECT,
	UPDATE_PROJECTS_DIR_PATH,
} from './mutation-types'

import { PROJECTS_DIR_PATH } from './getter-types.js'

import Util from '@/Util.js'

export const mutations = {
	[UPDATE_PROJECTS](state, payload) {
		state.projects = payload
	},
	[UPDATE_ACTIVE_PROJECT](state, payload) {
		state.activeProject = payload
	},
	[UPDATE_PROJECTS_DIR_PATH](state, payload) {
		const obj = { [PROJECTS_DIR_PATH]: payload }
		Util.writeFile(`settings.json`, JSON.stringify(obj))
		state.projectsDirPath = payload
	},
}
