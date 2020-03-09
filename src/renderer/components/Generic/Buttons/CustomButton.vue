<template>
	<b-button :size="size" block @click="$emit('click')">
		<slot></slot>
	</b-button>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
	props: {
		variant: String,
		size: String,
	},
})
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variables.scss';
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
// button {
// 	// padding: $unit $unit-x0_5;
// }
</style>
