<template>
  <div class="logo">
		<Logo />
	</div>
</template>

<script setup lang="ts">
import Logo from '@modules/core/components/Logo.vue';

</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
    }
</style>