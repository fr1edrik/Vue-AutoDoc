<template
	><div>
		<div>Startpage</div>
		<file-handler @click="updateProjectsDirPath" />
		<div class="center-box">
			<ul>
				<li v-for="(project, index) in projects" :key="index">
					<custom-button
						size="lg"
						variant="primary"
						@click="goToProject(index)"
						>{{ project }}</custom-button
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="js">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { PROJECTS } from '@/store/modules/projects/getter-types.js'
import { GET_PROJECTS } from '@/store/modules/projects/actions-types.js'
import { UPDATE_ACTIVE_PROJECT, UPDATE_PROJECTS_DIR_PATH } from '@/store/modules/projects/mutation-types.js'
import CustomButton from '@/components/Generic/Buttons/CustomButton.vue'
import FileHandler from "@/components/Generic/FileHandler/FileHandler.vue";
import { Routes } from '@/router/index'


export default Vue.extend({
	components: { CustomButton, FileHandler },
	data() {
		return {}
	},
	computed: {
		...mapGetters({
			projects: PROJECTS,
		}),
	},
	methods: {
		updateProjectsDirPath(e){
			this.$store.commit(UPDATE_PROJECTS_DIR_PATH, e)
			this.updateProjects()
		},
		updateProjects() {
			this.$store.dispatch(GET_PROJECTS)
		},
		goToProject(index) {
			this.$store.commit(UPDATE_ACTIVE_PROJECT, this.projects[index])

			this.$router.push({name: Routes.Dashboard})
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

.center-box {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
