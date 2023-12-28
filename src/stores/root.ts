import { defineStore } from 'pinia';
import axios from 'axios';
import { INGREDIENTS_URL } from '../constans';

interface RootState {
	ingredients: { strIngredient1: string }[]; // Замените на фактический тип
}

interface RootActions {
	getIngredients: () => Promise<void>;
}

export const useRootStore = defineStore('root', {
	state: (): RootState => ({
		ingredients: [],
	}),

	actions: {
		async getIngredients(): Promise<void> {
			const data = await axios.get(INGREDIENTS_URL);
			this.ingredients = data?.data?.drinks;
		},
	},
});
