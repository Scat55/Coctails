<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue';
</script>

<template>
	<AppLayout imageUrl="/src/assets/images/bg-1.jpg">
		<div class="wrapper">
			<div class="info">
				<div class="title">Choose your drink</div>
				<div class="line"></div>
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
</style>
