<template>
	<Sidebar :visible.sync="visible" position="left">
		<div class="sidebar-content">
			<h2>Sidebar Title</h2>
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/about">About</router-link></li>
				<li><router-link to="/contact">Contact</router-link></li>
			</ul>
		</div>
	</Sidebar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Sidebar from 'primevue/sidebar';

const visible = ref(true);

const showSidebar = () => {
	visible.value = true;
};

const hideSidebar = () => {
	visible.value = false;
};
</script>

<style scoped lang="scss">
@import '../assets/styles/variables';

.sidebar-content {
	padding: $spacer;

	h2 {
		margin: 0;
		font-size: $font-size-lg;
		color: $font-color;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			margin-bottom: $spacer;

			a {
				color: $font-color;
				text-decoration: none;
				font-size: $font-size-base;

				&:hover {
					color: $primary-color;
				}
			}
		}
	}
}
</style>
