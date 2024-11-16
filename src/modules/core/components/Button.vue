<template>
	<button
		:class="buttonClass"
		@mousedown="handleMouseDown"
		@mouseup="handleMouseUp"
		@mouseleave="handleMouseUp"
		@click="handleClick"
	>
		{{ text }}
	</button>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
	type: {
		type: String,
		default: 'button',
		validator(value: string) {
			return ['button', 'submit', 'reset'].includes(value);
		},
	},
	priority: {
		type: String,
		default: 'normal',
		validator(value: string) {
			return ['low', 'normal', 'high', 'gray', 'find', 'start'].includes(value);
		},
	},
	text: {
		type: String,
		required: true,
	},
});

const isPressed = ref(false);

const emit = defineEmits();
const handleClick = (event: MouseEvent) => {
	emit('click', event);
};

const handleMouseDown = () => {
	isPressed.value = true;
};

const handleMouseUp = () => {
	isPressed.value = false;
};
const buttonClass = computed(() => ({
	btn: true,
	'btn-low': props.priority === 'low',
	'btn-normal': props.priority === 'normal',
	'btn-high': props.priority === 'high',
	'btn-gray': props.priority === 'gray',
	'btn-find': props.priority === 'find',
	pressed: isPressed.value,
	'btn-start': props.priority === 'start',
}));
</script>
<style scoped lang="scss">
.btn {
	padding: 5px 31px;
	border: none;
	border-radius: 50px;
	cursor: pointer;
	font-size: 10px;
	transition: all ease 0.3s;
}

.btn-high {
	background: #39ac60;
}

.btn-high:hover {
	background: #39be65;
}

.btn-normal {
	background: rgb(201, 124, 69);
	color: white;
}

.btn-normal:hover {
	background: #d88250;
}

.btn-low {
	background-color: rgb(201, 69, 69);
	color: white;
}

.btn-low:hover {
	background-color: rgb(193, 97, 97);
}

.btn-gray {
	background-color: rgba(255, 255, 255, 0.1);
}

.btn-gray:hover {
	background-color: rgba(255, 255, 255, 0.2);
}

.btn-find {
	font-size: 17px;
	background: linear-gradient(90deg, rgb(255, 153, 41) 21.5%, rgb(242, 84, 48) 73.5%);
}

.btn-find:hover {
	background: linear-gradient(90deg, rgb(255, 153, 41) 0%, rgb(242, 84, 48) 100%);
}

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
</style>
