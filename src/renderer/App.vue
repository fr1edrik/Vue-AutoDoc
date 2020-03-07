<template>
	<div id="app">
		<sidebar />
		<div id="content">
			<router-view />
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
const Sidebar = require('@/components/Sidebar/Sidebar').default
import { Routes } from '@/router/index'

export default Vue.extend({
	components: { Sidebar },
	computed: {
		// isStartPage() {
		// 	return this.$routes.name === Routes.StartPage
		// },
	},
})
</script>

<style lang="scss">
body,
html {
	margin: 0;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
}

#app {
	height: 100%;
	width: 100%;

	display: grid;
	grid-template-areas: 'sidebar content';

	grid-template-columns: 1fr 4fr;
	sidebar {
		grid-area: sidebar;
	}
}

#conent {
	margin: 0;
	grid-area: content;
}
</style>
