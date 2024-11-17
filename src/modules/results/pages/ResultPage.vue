<template>
	<Navbar />
	<Loader v-if="isLoading" />
	<Table :rows="savedSpreads" />
</template>
<script setup lang="ts">
import Navbar from '@/modules/core/components/Navbar.vue';
import { useTarotApi } from '@/modules/core/hooks/useTarotApi';
import Table from '@modules/results/components/Table.vue';
import Loader from '@/modules/core/components/Loader.vue';
import { onMounted } from 'vue';

const { isLoading, savedSpreads, loadSavedSpreads } = useTarotApi();

onMounted(() => {
	if (!savedSpreads.value.length) loadSavedSpreads();
});
</script>
