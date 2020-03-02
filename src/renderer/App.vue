<template>
	<div id="app">
		<sidebar />
		<router-view />
	</div>
</template>

<script>
import Vue from 'vue'
const Sidebar = require('@/components/Sidebar').default
export default Vue.extend({
	components: { Sidebar },
})
</script>

<style scoped lang="scss">
body,
html {
	margin: 0;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
}

#app {
	display: flex;
	//flex-direction: column-reverse;
	height: 100%;

	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: black;

	.view {
		width: 100%;
		& * {
			height: 100%;
		}
	}
}
</style>
