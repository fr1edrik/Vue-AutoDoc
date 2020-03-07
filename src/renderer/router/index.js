import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard/Dashboard.vue'
import CodeAnalysis from '@/components/CodeAnalysis/CodeAnalysis.vue'
import StartPage from '@/components/StartPage/StartPage.vue'

export const Routes = {
	Dashboard: 'dashboard',
	ComponentDoc: 'componentDoc',
	CodeAnalysis: 'codeAnalysis',
}

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '*',
			redirect: { name: Routes.Dashboard },
		},
		{
			path: Routes.Dashboard,
			name: Routes.Dashboard,
			// component: Dashboard,
			component: StartPage,
		},
		{
			path: Routes.CodeAnalysis,
			name: Routes.CodeAnalysis,
			component: CodeAnalysis,
		},
	],
	scrollBehavior(_to, _from, savedPosition) {
		return savedPosition || { x: 0, y: 0 }
	},
})
