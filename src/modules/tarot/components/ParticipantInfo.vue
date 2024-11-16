<template>
	<div class="info">
		<p><strong>From:</strong> {{ targetFrom }}</p>
		<p><strong>To:</strong> {{ targetTo }}</p>
	</div>
</template>
<script setup lang="ts">
defineProps<{ targetFrom: string; targetTo: string }>();
</script>
<style scoped lang="scss">
.info {
	position: absolute;
	top: 20px;
	right: 20px;
	margin-left: 4rem;
}
</style>
