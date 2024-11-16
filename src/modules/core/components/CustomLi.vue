<template>
    <li :class="listItemClass" @click="select">
      <slot>Летуаль</slot> 
    </li>
  </template>
  
  <script>
  export default {
    name: 'SelectableListItem',
    data() {
      return {
        selected: false // Состояние выбора элемента
      };
    },
    computed: {
      listItemClass() {
        return {
          'list-item': true,
          'selected': this.selected // Применяем класс 'selected', если элемент выбран
        };
      }
    },
    methods: {
      select() {
        this.selected = !this.selected; // Переключаем состояние выбора
        this.$emit('select', this.selected); // Эмитируем событие выбора с текущим состоянием
      }
    }
  }
  </script>
  
  <style scoped>
  .list-item {
    position: absolute;
    width: 440px;
    height: 33px;
    left: 20px;
    top: 20px;
    border-radius: 50px;
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10;
    padding: 8px 362px 8px 44px;
    background: rgba(255, 255, 255, 0.2);
  }
  
  
  .selected {
    background-color: #007bff; /* Цвет фона для выбранного элемента */
    color: white; /* Цвет текста для выбранного элемента */
  }
  </style>
  