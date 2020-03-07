<template
	><div>
		<div>Startpage</div>

		<ul>
			<li>
				<a v-for="(project, index) in projects" :key="index">
					{{ project }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import Vue from 'vue'
import Util from '../../Util.js'

export default Vue.extend({
	data() {
		return { projects: null }
	},
	methods: {
		updateProjects() {
			Util.getProjectNames(projects => (this.projects = projects))
		},
	},
	mounted() {
		this.updateProjects()
	},
})
</script>

<style scoped lang="scss"></style>
