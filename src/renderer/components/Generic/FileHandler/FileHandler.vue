<template>
	<customButton variant="outline-primary" @click="handleClick">
		Select Projects Directory
	</customButton>
</template>

<script>
import Vue from 'vue'
import { remote } from 'electron'
import CustomButton from '@/components/Generic/Buttons/CustomButton.vue'
export default Vue.extend({
	components: {
		CustomButton,
	},
	methods: {
		handleClick() {
			let path = remote.dialog.showOpenDialog({ properties: ['openDirectory'] })
			if (path.length > 0) {
				this.$emit('click', path[0])
			}
		},
	},
})
</script>

<style lang="scss" scoped></style>
