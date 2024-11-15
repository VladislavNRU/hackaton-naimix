<template>
    <button :class="buttonClass" @mousedown="handleMouseDown" @mouseup="handleMouseUp" @mouseleave="handleMouseUp" @click="handleClick" class="{ animate: isAnimating }">
      {{ text }}
    </button>
  </template>
  
  <script>
  export default {
    data() {
        return {
          isPressed: false // Состояние для отслеживания нажатия кнопки
        };
      },
    name: 'CustomButton',
    props: {
      type: {
        type: String,
        default: 'button', 
        validator: function (value) {
          
          return ['button', 'submit', 'reset'].includes(value);
        }
      },
      
      priority: {
        type: String,
        default: 'normal', 
        validator: function (value) {
          return ['low', 'normal', 'high', 'gray', 'find', 'start'].includes(value);
        }
      },
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      buttonClass() {
        return {
          'btn': true,
          'btn-low': this.priority === 'low',
          'btn-normal': this.priority === 'normal',
          'btn-high': this.priority === 'high',
          'btn-gray': this.priority == 'gray',
          'btn-find': this.priority == 'find',
          'pressed': this.isPressed,
          'btn-start': this.priority == 'start'
        };
      }
    },
    methods: {
      handleClick(event) {
      this.$emit('click', event);
    },
    handleMouseDown() {
      this.isPressed = true; // Устанавливаем состояние нажатия
    },
    handleMouseUp() {
      this.isPressed = false; // Сбрасываем состояние нажатия
    }
    }
  }
  </script>
  
  <style scoped>
  .btn {
    padding: 5px 31px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 10px;
    transition: all ease 0.3s; 
  
  }
  
  /* Стиль для кнопки с высокиим приоритетом */
  .btn-high {
    background: #39AC60;
  }
  
  .btn-high:hover {
    background: #39be65;
  }
  /* Стиль для кнопки с обычным приоритетом */
  .btn-normal {
    background: rgb(201, 124, 69);
    color: white;
  }
  .btn-normal:hover {
    background: #d88250;
  }

  /* Стиль для кнопки с низким приоритетом */
  .btn-low {
    background-color: rgb(201, 69, 69);
    color: white;
  }
  .btn-low:hover {
    background-color: rgb(193, 97, 97);
  }

  /* Стиль для кнопки серой */
  .btn-gray {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .btn-gray:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  /* Стиль для кнопки найти */
  .btn-find {
    font-size: 17px;
    background: linear-gradient(90.00deg, rgb(255, 153, 41) 21.5%,rgb(242, 84, 48) 73.5%);
  }
  .btn-find:hover {
    background: linear-gradient(90.00deg, rgb(255, 153, 41) 0%, rgb(242, 84, 48) 100%);
  }

  /* Стиль для кнопки начать тестирование */
  .btn-start {
    font-size: 17px;
    background: rgb(25, 25, 25);
    display: flex;
    align-items: center;
  }
  .btn-start::after {
    content: '';
    display: block;
    margin-left: 18px;
    width: 5px;
    background: url('../../../assets/images/Icon.png');
    height: 10px;
  }

  /* короче тут анимация, но она кривая, потом сделаю */
  /* 
    .pressed {
      font-size: 12px;
    } 
  */

  </style>
  