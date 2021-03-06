<template
	><div>
		<h5>{{ dirName }}</h5>
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
							<th>Type</th>
							<th>Type Description</th>
							<th>Required</th>
							<th>Default</th>
							<th>Validator</th>
							<th>Validator Description</th>
						</tr>
						<tr v-for="(item, j) in comp.props" :key="j">
							<td>{{ item.name }}</td>
							<td>{{ item.type }}</td>
							<td>{{ item.typeDesc }}</td>
							<td>{{ item.required ? true : false }}</td>
							<td>{{ item.default }}</td>
							<td>{{ item.validator }}</td>
							<td>{{ item.validatorDesc }}</td>
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
							<th>Describe</th>
						</tr>
						<tr
							v-for="({ name, argumentsDesc, isSync, syncProp, describe },
							j) in comp.events"
							:key="j"
						>
							<td>{{ name }}</td>
							<td>{{ argumentsDesc }}</td>
							<td>{{ isSync }}</td>
							<td>{{ syncProp }}</td>
							<td>{{ describe }}</td>
						</tr>
					</table>
				</div>

				<div v-if="comp.slots">
					<h5>Slot</h5>
					<table style="width:100%">
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Backer Description</th>
							<th>Scoped</th>
							<th>Target</th>
						</tr>
						<tr
							v-for="({ name, describe, backerDesc, scoped, target },
							j) in comp.slots"
							:key="j"
						>
							<td>{{ name }}</td>
							<td>{{ describe }}</td>
							<td>{{ backerDesc }}</td>
							<td>{{ scoped }}</td>
							<td>{{ target }}</td>
						</tr>
					</table>
				</div>

				<div v-if="comp.methods">
					<h5>Methods</h5>
					<table style="width:100%">
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Scoped</th>
						</tr>
						<tr
							v-for="({ name, describe, argumentsDesc }, j) in comp.slots"
							:key="j"
						>
							<td>{{ name }}</td>
							<td>{{ describe }}</td>
							<td>{{ argumentsDesc }}</td>
						</tr>
					</table>
				</div>

				<div v-if="comp.mixIns">
					<h5>Mixins</h5>
					<table style="width:100%">
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Scoped</th>
						</tr>
						<tr
							v-for="({ name, describe, argumentsDesc }, j) in comp.slots"
							:key="j"
						>
							<td>{{ name }}</td>
							<td>{{ describe }}</td>
							<td>{{ argumentsDesc }}</td>
						</tr>
					</table>
				</div>
				<div>
					<b-button
						:class="visible[i] ? null : 'collapsed'"
						:aria-expanded="visible[i] ? 'true' : 'false'"
						aria-controls="collapse-4"
						@click="visible[i] = !visible[i]"
					>
						View Sourcecode
					</b-button>

					<b-collapse v-model="visible[i]" id="collapse-3">
						<b-textarea
							readonly
							rows="10"
							lazy-formatter
							:value="getCode(comp.path)"
						></b-textarea>
					</b-collapse>
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
			visible: {},
		}
	},
	props: {
		dirName: String,
	},
	computed: {
		path() {
			return this.$route.params.path
		},
	},
	methods: {
		updateDoc() {
			this.path.children.forEach(v => {
				const comp = Util.parseComponent(v.path)

				this.components.push({ ...comp, componentName: v.name, path: v.path })
			})
		},
		getCode: value => {
			if (!value) return ''

			const file = Util.fs.readFileSync(value, 'utf8').replace('', '')

			return file
		},
	},
	mounted() {
		this.updateDoc()
	},
	filters: {
		getCode: value => {
			if (!value) return ''

			const file = Util.fs.readFileSync(value, 'utf8').replace('', '')

			return file
		},
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
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

.code {
	overflow: scroll;
}
</style>
