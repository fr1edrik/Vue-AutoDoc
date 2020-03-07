import { GET_PROJECTS } from './actions-types'
import { UPDATE_PROJECTS } from './mutation-types'

export const actions = {
	[GET_PROJECTS](commit) {
		Util.getProjectNames(projects => {
			commit(UPDATE_PROJECTS, projects)
		})
	},
}
