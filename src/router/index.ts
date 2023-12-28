import Cocktail from '@/pages/Cocktail.vue';
import CocktailRandom from '@/pages/CocktailRandom.vue';
import Home from '@/pages/Home.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/cocktails/:id',
			name: 'cocktail',
			component: Cocktail,
		},
		{
			path: '/random',
			name: 'random',
			component: CocktailRandom,
		},
	],
});

export default router;
