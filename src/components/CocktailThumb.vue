<script setup lang="ts">
import { RouterLink } from 'vue-router';
interface Props {
	cocktail: object;
}
const props = defineProps<Props>();

const { cocktail } = props;
</script>

<template>
	<div class="root">
		<RouterLink :to="`/cocktails/${cocktail.idDrink}`">
			<div
				class="pic"
				:style="`background-image: url(${cocktail.strDrinkThumb})`"
			></div>
			<div class="name">{{ cocktail.strDrink }}</div>
		</RouterLink>
	</div>
</template>

<style scoped lang="sass">
@import '../assets/styles/main.sass'

.root
	width: calc((100% - 76px ) / 3)
	padding-right: 2.375rem
	padding-bottom: 1.25rem
	&::nth-child(3n + 3)
		padding-right: 0

.pic
	width: 7.5rem
	height: 7.5rem
	margin: 0 auto
	background-repeat: no-repeat
	background-position: 50% 50%
	background-size: 100%

.name
	padding-top: .9375rem
	letter-spacing: 0.1em
</style>
