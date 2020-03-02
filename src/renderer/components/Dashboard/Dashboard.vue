<template>
	<div>
		<h1>Dashboard</h1>
		<p v-for="(card, index) in cards" :key="index">{{ card }}</p>
	</div>
</template>

<script lang="js">
// import { Vue, Component } from 'vue-property-decorator'
import Vue from "vue";

// @Component({
// 	components: {},
// })
// export default class Dashboard extends Vue {
// 	cards = [{ c: 1 }, { c: 2 }, { c: 3 }]
// }

export default Vue.extend({
  data() {
      return {
        cards: [{ c: 1 }, { c: 2 }, { c: 3 }]
      }
  },
  mounted(){

  }
});
</script>

<style scoped>
/* @import "@/assets/styles/variables.scss"; */
.card-container {
	background-color: #ffff;
}
</style>
