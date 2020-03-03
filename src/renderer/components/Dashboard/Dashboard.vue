<template>
	<div>
		<h1>Dashboard</h1>
		<div class="card-container" v-for="(card, index) in cards" :key="index">
			{{ card }}
		</div>
	</div>
</template>

<script lang="js">
// import { Vue, Component } from 'vue-property-decorator'
import Vue from 'vue';
import Util from '../../Util.js'
import { parser } from '@vuese/parser'
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
   const source = Util.fs.readFileSync('E:\\_Projects\\_template\\Electron\\my-todos\\src\\renderer\\components\\LandingPage.vue', 'utf-8')

  try {
  const parserRes = parser(source)
  console.log(parserRes)
} catch(e) {
  console.error(e)
}
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
.card-container {
	background-color: $white;
}
</style>
