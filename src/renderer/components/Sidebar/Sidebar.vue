<template>
	<div class="sidebar">
		<div class="inner">
			<h4>Overview</h4>
			<ul>
				<li>
					<router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
				</li>
				<li>
					<router-link :to="{ name: MappedRoutes.CodeAnalysis }"
						>Code Analysis</router-link
					>
				</li>
			</ul>
			<h4>Test Component</h4>
			<ul>
				<li>
					<a>Props</a>
				</li>
				<li>
					<a>Events</a>
				</li>
				<li>
					<a>Slots</a>
				</li>
				<li>
					<a>Methods</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator'
import Vue from 'Vue'
import { Routes } from '../../router/IRoutes'

export default Vue.extend({
	computed: {
		MappedRoutes() {
			return {
				Dashboard: Routes.Dashboard,
				CodeAnalysis: Routes.CodeAnalysis,
			}
		},
	},
	mounted() {},
})
</script>

//
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
	}
}
</style>
