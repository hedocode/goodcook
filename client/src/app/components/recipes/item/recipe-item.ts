import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Recipe } from '../recipe.class';
import { RecipeIngredient } from '../recipe-ingredient.class';

@Component({
  selector: 'recipe-item',
  imports: [FormsModule, MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.scss',
})

export class RecipeItemComponent {
  @Input() recipe: Recipe = { id: NaN, title: "", description: "", steps: [], ingredients: [] };

  @Output() onRecipeAdded: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  @Output() onRecipeRemoved: EventEmitter<number> = new EventEmitter<number>();

  serverUrl = 'http://localhost:8888';
  recipeDraft: Recipe = { id: NaN, title: "", description: "", steps: [], ingredients: [] };
  editMode: boolean = false;
  lastRecipe: Recipe = { id: NaN, title: "", description: "", steps: [], ingredients: [] };

  constructor(private http: HttpClient) {}

  addRecipe() {
    const recipeToAdd = {
      title: this.recipeDraft.title,
      description: this.recipeDraft.description,
      steps: this.recipeDraft.steps,
      ingredients: this.recipeDraft.ingredients
    };

    this.http.post(
      this.serverUrl + "/recipes/add", recipeToAdd
    ).subscribe((data) => {
      this.onRecipeAdded.emit(data as Recipe);
      this.recipeDraft = { id: NaN, title: "", description: "", steps: [], ingredients: [] };
    });
  }

  removeRecipe(id: number) {
    this.http.delete(
      this.serverUrl + "/recipes/remove/" + id
    ).subscribe(() => this.onRecipeRemoved.emit(id));
  }

  toggleEdition() {
    this.lastRecipe = JSON.parse(JSON.stringify(this.recipe));
    this.editMode = !this.editMode;
  }

  editRecipe() {
    if (JSON.stringify(this.recipe) !== JSON.stringify(this.lastRecipe)) {
      this.http.put(
        this.serverUrl + "/recipes/update/" + this.recipe.id, this.recipe
      ).subscribe(() => this.toggleEdition());
    } else {
      this.toggleEdition();
    }
  }

  addStep() {
    if (this.recipe.id) {
      this.recipe.steps.push("");
    } else {
      this.recipeDraft.steps.push("");
    }
  }

  removeStep(index: number) {
    if (this.recipe.id) {
      this.recipe.steps.splice(index, 1);
    } else {
      this.recipeDraft.steps.splice(index, 1);
    }
  }

  addIngredient() {
    const newIngredient = new RecipeIngredient(NaN, 0, 0, "");
    if (this.recipe.id) {
      this.recipe.ingredients.push(newIngredient);
    } else {
      this.recipeDraft.ingredients.push(newIngredient);
    }
  }

  removeIngredient(index: number) {
    if (this.recipe.id) {
      this.recipe.ingredients.splice(index, 1);
    } else {
      this.recipeDraft.ingredients.splice(index, 1);
    }
  }
}