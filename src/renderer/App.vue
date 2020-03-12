<template>
	<div id="app">
		<sidebar v-if="!isStartPage" />
		<div id="content">
			<b-breadcrumb v-if="!isStartPage">
				<b-breadcrumb-item
					v-for="({ meta, name }, index) in routePath"
					:key="index"
					:to="{ name }"
					>{{ meta.linkText }}</b-breadcrumb-item
				>
			</b-breadcrumb>
			<router-view :key="$route.fullPath" />
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import Sidebar from '@/components/Sidebar/Sidebar'
import { Routes } from '@/router/index'

export default Vue.extend({
	components: { Sidebar },
	computed: {
		isStartPage() {
			return this.$route.name === Routes.StartPage
		},
		routePath() {
			return this.$route.matched
		},
	},
})
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
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

#content {
	margin: 0;
	grid-area: content;
}
</style>
