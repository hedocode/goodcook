import { RecipeIngredient } from './recipe-ingredient.class';

export class Recipe {
    id: number;
    title: string;
    description: string;
    steps: string[];
    ingredients: RecipeIngredient[];

    constructor(id: number, title: string, description: string, steps: string[], ingredients: RecipeIngredient[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.steps = steps;
        this.ingredients = ingredients;
    }
}