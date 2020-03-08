<template>
	<div class="sidebar">
		<div class="inner">
			<h4>Overview</h4>
			<ul>
				<li>
					<router-link :to="{ name: MappedRoutes.Dashboard }"
						>Dashboard</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: MappedRoutes.CodeAnalysis }"
						>Code Analysis</router-link
					>
				</li>
			</ul>
			<h4>Componens</h4>
			<ul class="components">
				<li>
					Root
				</li>
				<li v-for="(file, key) in files.dirs" :key="key">
					{{ file.name }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'Vue'
import { Routes } from '../../router/IRoutes'
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
			}
		},
	},
	methods: {
		updateFiles() {
			Util.walkPath(
				this.$store.getters[ACTIVE_PROJECT],
				res => (this.files = res),
			)
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
}
</style>
