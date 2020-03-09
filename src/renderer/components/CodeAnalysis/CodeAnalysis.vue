<template
	><div>
		<h5>{{ name }}</h5>
		<b-card
			class="container"
			v-for="(comp, i) in components"
			:key="i"
			:title="comp.componentName"
		>
			<b-card-text>
				<div v-if="comp.props">
					<h5>Props</h5>
					<table style="width:100%">
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Type</th>
							<th>Required</th>
							<th>Default</th>
						</tr>
						<tr v-for="({ name, type, required }, j) in comp.props" :key="j">
							<td>{{ name }}</td>
							<td>Some description</td>
							<td>{{ type }}</td>
							<td>{{ required }}</td>
							<td>Default</td>
						</tr>
					</table>
				</div>

				<div v-if="comp.events">
					<h5>Events</h5>
					<table style="width:100%">
						<tr>
							<th>Name</th>
							<th>Arguments Description</th>
							<th>Is Sync</th>
							<th>Sync Prop</th>
						</tr>
						<tr
							v-for="({ name, argumentsDesc, isSync, syncProp },
							j) in comp.events"
							:key="j"
						>
							<td>{{ name }}</td>
							<td>{{ argumentsDesc }}</td>
							<td>{{ isSync }}</td>
							<td>{{ syncProp }}</td>
						</tr>
					</table>
				</div>

				<div v-if="comp.slots">
					<h5>Slot</h5>
					<table style="width:100%">
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Scoped</th>
							<th>Target</th>
						</tr>
						<tr
							v-for="({ name, describe, scoped, target }, j) in comp.slots"
							:key="j"
						>
							<td>{{ name }}</td>
							<td>{{ describe }}</td>
							<td>{{ scoped }}</td>
							<td>{{ target }}</td>
						</tr>
					</table>
				</div>
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
import Vue from 'vue'
import Util from '@/Util'
export default Vue.extend({
	data() {
		return {
			components: [],
		}
	},
	props: {
		name: String,
	},
	computed: {
		path() {
			return this.$route.params.path
		},
	},
	watch: {
		path(newVal) {
			console.log(newVal)
			// this.$forceUpdate()
		},
	},
	methods: {
		updateDoc() {
			this.path.children.forEach(v => {
				const comp = Util.parseComponent(v.path)
				console.log(v)

				this.components.push({ ...comp, componentName: v.name })
			})

			console.log(this.components)
		},
	},
	mounted() {
		this.updateDoc()
	},
})
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables.scss';
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

.container {
	margin: $unit-x3 $unit-x0_5;
	background-color: white;

	b-card-text {
		background-color: white;
	}
}

table {
	font-family: arial, sans-serif;
	border-collapse: collapse;
	width: 100%;
	margin: $unit-x3 0;
}

td,
th {
	border: 1px solid $grey;
	text-align: left;
	padding: 8px;
}

tr:nth-child(even) {
	background-color: #dddddd;
}
</style>
