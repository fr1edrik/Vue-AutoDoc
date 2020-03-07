<template
	><div>
		<div>Startpage</div>

		<ul>
			<li v-for="(project, index) in projects" :key="index">
				<custom-button @click="goToProject(index)">{{ project }}</custom-button>
			</li>
		</ul>
	</div>
</template>

<script lang="js">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { PROJECTS } from '@/store/modules/projects/getter-types.js'
import { GET_PROJECTS } from '@/store/modules/projects/actions-types.js'
import { UPDATE_ACTIVE_PROJECT } from '@/store/modules/projects/mutation-types.js'
import CustomButton from '@/components/Generic/Buttons/CustomButton.vue'

export default Vue.extend({
	components: { CustomButton },
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
		goToProject(index) {
			this.$store.commit(UPDATE_ACTIVE_PROJECT, this.projects[index])
		},
		log() {
			console.log('test')
		},
	},
	created() {
		this.updateProjects()
	},
})
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables.scss';

ul {
	list-style-type: none;
	padding: 0;
	padding-bottom: $unit;

	li {
		margin-top: $unit-x0_5;
	}
}
</style>
