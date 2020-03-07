<template>
	<div>
		<slot name="header">
			<th>title</th>
		</slot>
	</div>
</template>

<script>
export default {
	name: 'MyComponent',
	props: {
		name: {
			type: [String, Number],
			required: true,
			validator() {},
		},
	},
	methods: {
		clear() {
			this.$emit('onclear', true)
		},
	},
}
</script>
