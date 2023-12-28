<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue';
import { useRootStore } from '@/stores/root';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const rootStore = useRootStore();

rootStore.getIngredients();

const { ingredients, cocktails } = storeToRefs(rootStore);
const ingredient = ref(null);

function getCocktails() {
	rootStore.getCocktails(String(ingredient.value));
}
</script>

<template>
	<AppLayout imageUrl="/src/assets/images/bg-1.jpg">
		<div class="wrapper">
			<div class="info">
				<div class="title">Choose your drink</div>
				<div class="line"></div>
				<div class="select-wrapper">
					<el-select
						v-model="ingredient"
						placeholder="Choose main ingredient"
						size="large"
						class="select"
						@change="getCocktails"
					>
						<el-option
							v-for="(item, idx) in ingredients"
							:key="idx"
							:label="item.strIngredient1"
							:value="item.strIngredient1"
						/>
					</el-select>
				</div>
				<div class="text">
					Try our delicious cocktail recipes for every occasion. Find delicious
					cocktail recipes by ingredient through our cocktail generator.
				</div>
				<img src="../assets/images/coctails.png" alt="Cocktails" class="img" />
			</div>
		</div>
	</AppLayout>
</template>

<style scoped lang="sass">
@import '@/assets/styles/main.sass'

.wrapper
	display: flex
	align-items: center
	justify-content: center

.info
	padding: 5rem 0
	text-align: center

.select-wrapper
	padding-top: 3.125rem

.select
	width: 13.75rem

.text
	max-width: 516px
	margin: 0 auto
	font-family: 'Raleway'
	font-size: 1rem
	padding-top: 3.125rem
	line-height: 2.25rem
	font-weight: 400
	letter-spacing: .1rem
	color: $text_muted

.img
	margin-top: 3.75rem
</style>
