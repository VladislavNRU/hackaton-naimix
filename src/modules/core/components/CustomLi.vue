<template>
  <label for="input">{{ label }}</label>
  <input name="input" :class="listItemClass" >
  </input>
</template>
<script setup lang="ts">
import { computed, defineEmits, ref } from 'vue';
const props = defineProps({
  label: {
    type: String,
  }
})
const emits = defineEmits<{
  (e: 'select', selected: boolean): void;
}>();

const selected = ref(false);

const listItemClass = computed(() => ({
  'list-item': true,
  'selected': selected.value,
}));

const select = () => {
  selected.value = !selected.value;
  emits('select', selected.value);
};
</script>
<style scoped>
.list-item {
  width: 100%;
  left: 20px;
  top: 20px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 70px 10px 20px;
  background: #fff;
  border: 1px #FF9929 solid;
  margin-bottom: 10px;
}


label {
  text-align: start;
  font-size: 12px;
  font-weight: bold;
}
input:focus {
  outline: none;
}
</style>
  