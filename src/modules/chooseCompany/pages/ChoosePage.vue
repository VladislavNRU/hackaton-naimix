<template>
	<Navbar />
	<Loader v-if="isLoading" />
	<div class="logo">
		<Logo />
	</div>
	<div class="container">
		<div class="content">
			<h1 class="choose-title">Выберите компанию</h1>
			<ChooseCompany :companies="companies" :users="users" />
			
		</div>
	</div>
</template>
<script setup lang="ts">
import ChooseCompany from '../components/ChooseCompany.vue';
import Logo from '@modules/core/components/Logo.vue';
import Navbar from '@modules/core/components/Navbar.vue';
import { useCompanyApi } from '../hooks/useCompanyApi';
import { onMounted } from 'vue';
import Loader from '@/modules/core/components/Loader.vue';
import { useUserApi } from '@/modules/core/hooks/useUserApi';

const { isLoading, companies, loadComnpanies } = useCompanyApi();
const { users, loadUsers } = useUserApi();

onMounted(() => {
	if (!companies.value.length) loadComnpanies();
	if (!users.value.length) loadUsers();
});
</script>
<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
}

.content {
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 130px 0;
	width: 460px;
	margin: 0 auto;
}
.choose-title {
	font-weight: 600;
	line-height: 48px;
	font-size: 40px;
}
.input-custom {
	width: 100%;
}
.checkbox {
	width: 100%;
}
.company-card {
	margin-bottom: 50px;
}
</style>
