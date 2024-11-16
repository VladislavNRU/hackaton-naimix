<template>
	<div class="input-custom">
		<input class="input-text" type="text" placeholder="Введите название компании" />
		<CustomButton class="input-btn" type="button" priority="find" text="Найти" />
	</div>
</template>

<script setup lang="ts">
import CustomButton from '@modules/core/components/Button.vue';
</script>

<style scoped lang="scss">
.input {
	&-custom {
		position: relative;
		display: flex;
		align-items: center;
		&::before {
			content: '';
			position: absolute;
			display: block;
			width: 17px;
			left: 12px;
			height: 17px;
			background: url('@/assets/images/search.svg');
		}
	}
	&-text {
		margin: 0;
		padding: 9px 223px 9px 40px;
		background: none;
		display: flex;
		border: none;
		align-items: center;
		justify-content: space-between;
	}
	&-btn {
		right: 0;
		position: absolute;
		top: 0;
		color: #fff;
		padding: 6px 20px;
	}
}
input:focus {
	outline: none;
}
</style>
