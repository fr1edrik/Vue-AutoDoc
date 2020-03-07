import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard/Dashboard.vue'
import CodeAnalysis from '@/components/CodeAnalysis/CodeAnalysis.vue'
import StartPage from '@/components/StartPage/StartPage.vue'

export const Routes = {
	StartPage: 'startpage',
	Dashboard: 'dashboard',
	ComponentDoc: 'componentDoc',
	CodeAnalysis: 'codeAnalysis',
}

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '',
			redirect: { name: Routes.StartPage },
		},
		{
			path: Routes.StartPage,
			name: Routes.StartPage,
			component: StartPage,
		},
		{
			path: Routes.Dashboard,
			name: Routes.Dashboard,
			component: Dashboard,
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
