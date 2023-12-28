import { defineStore } from 'pinia';
import axios from 'axios';
import { INGREDIENTS_URL, COCKTAILS_BY_INGREDIENT_URL } from '../constans';

interface RootState {
	ingredients: { strIngredient1: string }[]; // Замените на фактический тип
	cocktails: object;
}

interface RootActions {
	getIngredients: () => Promise<void>;
	getCocktails: () => Promise<void>;
}

export const useRootStore = defineStore('root', {
	state: (): RootState => ({
		ingredients: [],
		cocktails: [],
	}),

	actions: {
		async getIngredients(): Promise<void> {
			const data = await axios.get(INGREDIENTS_URL);
			this.ingredients = data?.data?.drinks;
		},
		async getCocktails(ingredient: string): Promise<void> {
			const res = await axios.post(
				`${COCKTAILS_BY_INGREDIENT_URL}${ingredient}`
			);
			this.cocktails = res?.data?.drinks;
		},
	},
});
