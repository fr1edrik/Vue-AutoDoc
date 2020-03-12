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
			meta: { linkText: 'Home' },
			children: [
				{
					path: '',
					redirect: { name: Routes.StartPage },
				},
				{
					path: Routes.StartPage,
					name: Routes.StartPage,
					component: StartPage,
					meta: { linkText: Routes.StartPage },
				},
				{
					path: Routes.Dashboard,
					name: Routes.Dashboard,
					component: Dashboard,
					meta: { linkText: Routes.Dashboard },
				},
				{
					path: 'codeAnalysis/:dirName',
					name: Routes.CodeAnalysis,
					component: CodeAnalysis,
					props: true,
					meta: { linkText: Routes.CodeAnalysis },
				},
			],
		},
	],
})
