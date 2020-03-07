import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'
import projects from './modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		projects,
	},
	plugins: [createPersistedState(), createSharedMutations()],
	strict: process.env.NODE_ENV !== 'production',
})
