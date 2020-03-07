import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

const projectsState = {
	state: { projects: {} },
	actions,
	mutations,
	getters,
}

export default projectsState
