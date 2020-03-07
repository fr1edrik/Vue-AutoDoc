import { PROJECTS, ACTIVE_PROJECT } from './getter-types'

export const getters = {
	[PROJECTS]: state => state.projects,
	[ACTIVE_PROJECT]: state => state.activeProject,
}
