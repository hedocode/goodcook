import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeItemComponent } from "../item/recipe-item";
import { Recipe } from '../recipe.class';

@Component({
  selector: 'recipe-list',
  imports: [FormsModule, RecipeItemComponent],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})

export class RecipeListComponent {
  isLoading: boolean = false;

  serverUrl = 'http://localhost:8888';
  recipes: Recipe[] = [];
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.isLoading = true;
    this.http.get(this.serverUrl + "/recipes/list").subscribe(
      (data: any) => {
        this.recipes = data as Recipe[];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading recipes:', error);
        this.isLoading = false;
      }
    );
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  removeRecipe(id: number) {
    this.recipes = this.recipes.filter(r => r.id !== id);
  }
}