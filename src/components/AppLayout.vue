<script setup lang="ts">
interface Props {
	imageUrl: string;
}

const props = defineProps<Props>();
const { imageUrl } = props;
</script>

<template>
	<div class="root">
		<div :style="`background-image: url(${imageUrl})`" class="img"></div>
		<div class="main">
			<el-button class="btn">Get random cocktail</el-button>
			<slot></slot>
		</div>
	</div>
</template>

<style scoped lang="sass">
@import '../assets/styles/main.sass'
.root
	display: flex
	background-color: $background-color
	min-height: 100vh

.img
	width: 50%
	background-repeat: no-repeat
	background-position: 50% 50%
	background-size: cover

.main
	position: relative
	width: 50%
	padding: 2rem 2.5rem

.btn
	font-family: 'Raleway'
	position: absolute
	top: 2rem
	right: 2.5rem
	background-color: $accent_color
	color: $text_color
	font-size: 1rem
	border-color: $accent_color
	transition: all .3s

	&:hover,
	&:active
		background-color: darken($accent_color, 10%)
		border-color: darken($accent_color, 10%)
</style>
