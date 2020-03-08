import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard/Dashboard.vue'
import CodeAnalysis from '@/components/CodeAnalysis/CodeAnalysis.vue'
import StartPage from '@/components/StartPage/StartPage.vue'
import AbstractRoute from './AbstractRoute'

export const Routes = {
	StartPage: 'startpage',
	Dashboard: 'dashboard',
	ComponentDoc: 'componentDoc',
	CodeAnalysis: 'codeAnalysis',
}

Vue.use(Router)

export const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: AbstractRoute,
			children: [
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
		},
	],
	scrollBehavior(_to, _from, savedPosition) {
		return savedPosition || { x: 0, y: 0 }
	},
})
