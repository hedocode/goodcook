import { Ingredient } from './ingredient.class';

describe(
  'Ingredient',
  () => {
    it('should create an instance', () => {
      expect(new Ingredient(1, "Patate")).toBeTruthy();
    });
  }
);
