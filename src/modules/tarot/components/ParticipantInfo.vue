<template>
	<div class="info">
		<p><strong>С кем сравниваем:</strong> {{ targetFrom }}</p>
		<p><strong>Кого сравниваем:</strong> {{ targetTo }}</p>
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
