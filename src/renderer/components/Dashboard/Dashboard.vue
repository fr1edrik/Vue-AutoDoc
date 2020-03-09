<template>
	<div>
		<h1>Dashboard</h1>
		<b-container>
			<b-row>
				<b-col v-for="(card, index) in cards" :key="index">
					<b-card>
						<b-card-text>
							{{ card }}
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

// @Component({
// 	components: {},
// })
// export default class Dashboard extends Vue {
// 	cards = [{ c: 1 }, { c: 2 }, { c: 3 }]
// }

export default Vue.extend({
  components:{

  },
  data() {
      return {
        cards: [{ c: 1 }, { c: 2 }, { c: 3 }]
      }
  },
  mounted(){

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
