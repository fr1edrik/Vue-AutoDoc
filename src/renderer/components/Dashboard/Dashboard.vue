<template>
	<div>
		<h1>Dashboard</h1>
		<b-container>
			<b-row>
				<b-col>
					<b-card title="Project Size" class="mb-2">
						<b-card-text>
							{{ projectSize }}
						</b-card-text>
					</b-card>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-card title="Correlation" class="mb-2">
						<b-card-text>
							<canvas id="myChart" width="400" height="400"></canvas>
						</b-card-text>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script lang="js">
// import { Vue, Component } from 'vue-property-decorator'
import Vue from 'vue';
import Util from '../../Util'
import { ACTIVE_PROJECT, PROJECTS_DIR_PATH } from '@/store/modules/projects/getter-types.js'
import getFolderSize from 'get-folder-size'

import { Chart } from "chart.js";

export default Vue.extend({
  components:{

  },
  data() {
      return {
		projectSize: ""
      }
  },
  methods:{
	  getProjectSize(){
		  const projName =  this.$store.getters[ACTIVE_PROJECT]
		  const projPath = this.$store.getters[PROJECTS_DIR_PATH]

		getFolderSize(projPath+'/'+projName, (err,size)=>{
			if (err) { throw err; }
			const res = (size / 1024 / 1024).toFixed(2) + ' MB'
			this.projectSize = res
		})
	  },
	  updateChart(){
		  var ctx = document.getElementById('myChart').getContext('2d');
		  var myChart = new Chart(ctx, {
			  type: 'scatter',
				data: {
					datasets: [{
						label: 'Scatter Dataset',
						data: [{
							x: -10,
							y: 0
						}, {
							x: 0,
							y: 10
						}, {
							x: 10,
							y: 5
						}]
					}]
				},
				options: {
					scales: {
						xAxes: [{
							type: 'linear',
							position: 'bottom'
						}]
					}
				}
			});
	  }
  },
  mounted(){
	  this.updateChart();
	  this.getProjectSize()
	Util.fetchRelation(this.$store.getters[ACTIVE_PROJECT], res => console.log(res))
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
.card-container {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
