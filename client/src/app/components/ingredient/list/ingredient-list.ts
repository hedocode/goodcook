import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { IngredientItemComponent } from "../item/ingredient-item";
import { Ingredient } from '../ingredient.class';

@Component({
  selector: 'ingredient-list',
  imports: [FormsModule, IngredientItemComponent],
  templateUrl: './ingredient-list.html',
  styleUrl: './ingredient-list.scss',
})

export class IngredientListComponent {
  isLoading: boolean = false;

  serverUrl = 'http://localhost:8888';
  ingredients: { id: number, name: string }[] = [];
  
  constructor(private http: HttpClient) {}


  ngOnInit() {
    this.http.get(this.serverUrl + "/ingredients/list").subscribe(
      (data: any) => {
        this.ingredients = data as { id: number, name: string }[];
      }
    );
  }

  addIngredient(ingredient: Ingredient) {
    // console.log(ingredient);
    this.ingredients.push(ingredient);
  }

  removeIngredient(id: number) {
    // console.log(data);
    this.ingredients = this.ingredients.filter(i => i.id !== id);
  }
}
