import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Ingredient } from '../ingredient.class';

@Component({
  selector: 'ingredient-item',
  imports: [FormsModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './ingredient-item.html',
  styleUrl: './ingredient-item.scss',
})

export class IngredientItemComponent {
  @Input() ingredient: Ingredient = { id: NaN, name: "" };

  @Output() onIngredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @Output() onIngredientRemoved: EventEmitter<number> = new EventEmitter<number>();

  serverUrl = 'http://localhost:8888';
  ingredientDraft: string = "";
  editMode: boolean = false;
  lastIngredientName: string = "";

  
  constructor(private http: HttpClient) {}

  addIngredient(name: string) {
    this.http.post(
      this.serverUrl + "/ingredients/add", { name }
    ).subscribe((data) => this.onIngredientAdded.emit(data as Ingredient));
  }

  removeIngredient(id: number) {
    this.http.delete(
      this.serverUrl + "/ingredients/remove/" + id
    ).subscribe(() => this.onIngredientRemoved.emit(id));
  }

  toggleEdition() {
    this.lastIngredientName = this.ingredient.name;
    this.editMode = !this.editMode;
  }

  editIngredient() {
    if(this.ingredient.name !== this.lastIngredientName) {
      this.http.put(
        this.serverUrl + "/ingredients/update/" + this.ingredient.id, this.ingredient
      ).subscribe(() => this.toggleEdition());
    } else {
      this.toggleEdition();
    }
  }
}
