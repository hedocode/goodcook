export class RecipeIngredient {
    id: number;
    ingredientId: number;
    quantity: number;
    unit: string;

    constructor(id: number, ingredientId: number, quantity: number, unit: string) {
        this.id = id;
        this.ingredientId = ingredientId;
        this.quantity = quantity;
        this.unit = unit;
    }
}