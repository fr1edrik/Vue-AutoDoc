import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

const projectsState = {
	state: {
		projects: [],
		activeProject: {},
	},
	actions,
	mutations,
	getters,
}

export default projectsState
