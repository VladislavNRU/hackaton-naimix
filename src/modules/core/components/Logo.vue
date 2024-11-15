<template>
	<div class="card">
		<span class="logo">The Card Diviner</span>
		<img :src="logo" alt="Logo" height="25"/>
	</div>
</template>
<script setup lang="ts">
import logo from '../../../assets/images/Logo.svg';
</script>
<style lang="scss" scoped>
.card {
	position: absolute;
	top: 1.5rem;
	left: 4em;
	display: flex;
	align-items: center;

	& .logo {
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
		color: #353535;
		margin: 0 auto;
	}

	& img {
		margin-left: 10px;
	}
}
</style>