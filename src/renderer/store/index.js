import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'
import projectsState from './modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		projectsState,
	},
	// plugins: [createPersistedState(), createSharedMutations()],
	// strict: process.env.NODE_ENV !== 'production',
})
