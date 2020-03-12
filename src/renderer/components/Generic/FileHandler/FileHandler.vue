<template>
	<div>
		<input
			type="file"
			id="ctrl"
			@change="handleFileChange"
			webkitdirectory
			directory
			multiple
		/>
	</div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
	methods: {
		handleFileChange(e) {
			console.log(document.getElementById('ctrl').value)
		},
	},
})
</script>

<style lang="scss" scoped></style>
