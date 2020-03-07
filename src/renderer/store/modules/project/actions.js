import { GET_PROJECTS } from './actions-types'

export const actions = {
	[GET_PROJECTS](commit) {
		Util.getProjectNames(projects => {
			commit(projects)
		})
	},
}
