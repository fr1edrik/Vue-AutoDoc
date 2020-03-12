import { PROJECTS, ACTIVE_PROJECT, PROJECTS_DIR_PATH } from './getter-types'

export const getters = {
	[PROJECTS]: state => state.projects,
	[ACTIVE_PROJECT]: state => state.activeProject,
	[PROJECTS_DIR_PATH]: state => state.projectsDirPath,
}
