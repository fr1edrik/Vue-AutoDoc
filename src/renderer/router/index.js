// import Vue from 'vue'
// import Router from 'vue-router'
// import { RouteConf } from './router/RouteConf'
// import { Routes } from './IRoutes'
// import AbstractRoute from './AbstractRoute.vue'

// import Dashboard from '../components/Dashboard/Dashboard.vue'

// Vue.use(Router)

// export default router = new Router({
// 	mode: 'history',
// 	routes: [
// 		{
// 			path: '/',
// 			component: AbstractRoute,
// 			meta: {
// 				title: 'AutoDoc',
// 			},
// 			// children: [
// 			// 	{
// 			// 		path: '',
// 			// 		redirect: { name: Routes.Dashboard },
// 			// 	},
// 			// 	{
// 			// 		path: Routes.Dashboard,
// 			// 		name: Routes.Dashboard,
// 			// 		component: Dashboard,
// 			// 	},
// 			// {
// 			// 	path: Routes.ComponentDoc,
// 			// 	name: Routes.ComponentDoc,
// 			// 	component: ComponentDoc,
// 			// },
// 			// {
// 			// 	path: Routes.CodeAnalysis,
// 			// 	name: Routes.CodeAnalysis,
// 			// 	component: CodeAnalysis,
// 			// },
// 			// ],
// 		},
// 	],
// 	scrollBehavior(_to, _from, savedPosition) {
// 		return savedPosition || { x: 0, y: 0 }
// 	},
// })

import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard/Dashboard.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'landing-page',
			component: Dashboard,
		},
		{
			path: '*',
			redirect: '/',
		},
	],
	scrollBehavior(_to, _from, savedPosition) {
		return savedPosition || { x: 0, y: 0 }
	},
})
