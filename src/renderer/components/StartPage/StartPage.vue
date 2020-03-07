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
import { mapGetters, mapac } from 'vuex'
import { PROJECTS } from '@/store/modules/projects/getter-types.js'
import { GET_PROJECTS } from '@/store/modules/projects/actions-types.js'
import Util from '../../Util.js'

export default Vue.extend({
	data() {
		return {}
	},
	computed: {
		...mapGetters({
			projects: PROJECTS,
		}),
	},
	methods: {
		updateProjects() {
			this.$store.dispatch(GET_PROJECTS)
		},
	},
	mounted() {
		this.updateProjects()
	},
})
</script>

<style scoped lang="scss"></style>
