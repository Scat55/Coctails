<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue';
import { useRootStore } from '@/stores/root';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const rootStore = useRootStore();

rootStore.getIngredients();

const { ingredients } = storeToRefs(rootStore);
const ingredient = ref(null);
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
					>
						<el-option
							v-for="(item, idx) in ingredients"
							:key="idx"
							:label="item.strIngredient1"
							:value="item.strIngredient1"
						/>
					</el-select>
				</div>
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
</style>
