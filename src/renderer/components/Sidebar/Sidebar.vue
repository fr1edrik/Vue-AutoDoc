<template>
	<div class="sidebar">
		<div class="inner">
			<h1>{{ activeProject }}</h1>
			<ul>
				<li>
					<router-link
						class="uppercase"
						:to="{
							name: MappedRoutes.StartPage,
						}"
						>Change Project</router-link
					>
				</li>
			</ul>
			<h4>Overview</h4>
			<ul>
				<li>
					<router-link :to="{ name: MappedRoutes.Dashboard }"
						>Dashboard</router-link
					>
				</li>
			</ul>
			<h4>Code Analysis</h4>
			<ul class="components">
				<li v-if="files.root.length > 0">
					<router-link
						class="uppercase"
						:to="{
							name: MappedRoutes.CodeAnalysis,
							params: { path: { children: files.root }, dirName: 'root' },
						}"
						>Root</router-link
					>
				</li>
				<li v-for="(file, key) in files.dirs" :key="key">
					<router-link
						class="uppercase"
						:to="{
							name: MappedRoutes.CodeAnalysis,
							params: { path: file, dirName: file.name },
						}"
						>{{ file.name }}</router-link
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'Vue'
import { Routes } from '../../router'
import { ACTIVE_PROJECT } from '../../store/modules/projects/getter-types.js'

import Util from '../../Util'

export default {
	data() {
		return {
			files: null,
		}
	},
	computed: {
		MappedRoutes() {
			return {
				Dashboard: Routes.Dashboard,
				CodeAnalysis: Routes.CodeAnalysis,
				StartPage: Routes.StartPage,
			}
		},
		activeProject() {
			return this.$store.getters[ACTIVE_PROJECT]
		},
	},
	methods: {
		updateFiles() {
			Util.walkPath(
				this.$store.getters[ACTIVE_PROJECT],
				res => (this.files = res),
			)
			// console.log(this.files)
		},
	},
	mounted() {
		this.updateFiles()
	},
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables.scss';
.sidebar {
	width: 12em;
	height: 100%;
	background-color: $black;

	.inner {
		position: relative;
		margin: $unit $unit-x2;

		ul {
			list-style-type: none;
			padding: 0;
			padding-bottom: $unit;

			li {
				margin-top: $unit-x0_5;
			}
		}

		router-link {
			color: $grey;
		}

		a {
			color: $grey;
			text-decoration: none;
		}

		h1,
		h4 {
			color: $teal;
		}

		#active {
			color: $white;
		}

		.components {
			color: $blue;
		}
	}

	.uppercase {
		text-transform: capitalize;
	}
}
</style>
