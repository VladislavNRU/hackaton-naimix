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
  
  // Определяем реактивное состояние для выбора элемента
  const selected = ref(false);
  
  // Вычисляемое свойство с типом
  const listItemClass = computed(() => ({
    'list-item': true,
    'selected': selected.value, // Применяем класс 'selected', если элемент выбран
  }));
  
  // Метод для переключения состояния выбора
  const select = () => {
    selected.value = !selected.value; // Переключаем состояние выбора
    emits('select', selected.value); // Эмитируем событие выбора с текущим состоянием
  };
  </script>
  
  <style scoped>
  .list-item {
    left: 20px;
    top: 20px;
    border-radius: 50px;
    /* Auto layout */
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
  }
  input:focus {
	  outline: none;
  }
  </style>
  