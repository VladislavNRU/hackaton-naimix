<template>
  <div class="select-container">
    <label for="dropdown" class="select-label">{{ label }}</label>
    <select
      id="dropdown"
      class="custom-select"
      v-model="internalValue"
      :class="{ placeholder: !emptyValue(internalValue) && !isOpen }"
      @focus="isOpen = true"
      @blur="isOpen = false"
      required
    >
      <option v-if="!emptyValue(internalValue) && !isOpen && placeholder" value="" disabled selected>
        {{ placeholder }}
      </option>
      <option v-for="option in options" :key="option[optionValue]" :value="option">
        {{ optionValue ? option[optionValue] : option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, ref } from 'vue';

type Option = Record<string, any>;

const props = defineProps<{
  options: Option[];
  optionValue?: string;
  placeholder?: string;
  label: string;
  modelValue: any | null;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: Option): void;
}>();

const isOpen = ref(false);

const placeholder = computed(() => props.placeholder);
const options = computed(() => props.options);
const optionValue = computed(() => props.optionValue);
const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value);
  },
});

const emptyValue = (value: any): boolean => {
  if (value == null) return false;
  if (typeof value === 'string') return value.trim() !== '';
  if (typeof value === 'object' && !Array.isArray(value)) return Object.keys(value).length > 0;
  return true;
};
</script>

<style scoped lang="scss">
.select-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.select-label {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
}

.custom-select {
  appearance: none;
  border: 1px solid #FF9929; /* Установите ваш основной цвет */
  border-radius: 8px; /* Радиус скругления */
  padding: 10px 15px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s;
  width: 100%;
}

.custom-select.placeholder {
  color: #999;
}

.custom-select:hover {
  border-color: #888;
}

.custom-select:focus {
  border-color: #FF5B00; /* Цвет рамки при фокусе */
  box-shadow: 0 0 5px rgba(255, 91, 0, 0.5);
  outline: none;
}

.custom-select option {
  padding: 15px; /* Расстояние внутри каждой опции */
}
</style>
