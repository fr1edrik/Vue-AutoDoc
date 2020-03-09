<template
	><div>
		<div class="table-container" v-for="(comp, i) in components" :key="i">
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
						<th>Description</th>
						<th>Type</th>
						<th>Required</th>
						<th>Default</th>
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
		</div>
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
	computed: {
		path() {
			return this.$route.params.path
		},
	},
	methods: {
		updateDoc() {
			console.log(this.path)

			this.path.children.forEach(v => {
				const comp = Util.parseComponent(v.path)
				console.log(comp)

				this.components.push(comp)
			})
		},
	},
	mounted() {
		this.updateDoc()
	},
})
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables.scss';

.table-container {
	padding: $unit-x3 $unit-x0_5;
}

table {
	font-family: arial, sans-serif;
	border-collapse: collapse;
	width: 100%;
}

td,
th {
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}

tr:nth-child(even) {
	background-color: #dddddd;
}
</style>
