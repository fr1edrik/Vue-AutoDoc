<template>
	<button @click="$emit('click')">
		<slot></slot>
	</button>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variables.scss';

button {
	padding: $unit $unit-x0_5;
}
</style>
