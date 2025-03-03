import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExternalLinkComponent } from '../external-link/external-link';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExternalLinkComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'goodcook-ui';
  serverUrl = 'http://localhost:8888';
  ingredients: { id: number, name: string }[] = [];
  ingredientDraft: string = "";
  
  constructor(private http: HttpClient) {}


  ngOnInit() {
    this.http.get(this.serverUrl + "/ingredients/list").subscribe(
      (data: any) => {
        this.ingredients = data as { id: number, name: string }[];
      }
    );
  }

  addIngredient(name: string) {
    this.http.post(this.serverUrl + "/ingredients/add", { name }).subscribe(
      (data: any) => {
        console.log(data);
        this.ingredients.push(data as { id: number, name: string });
      }
    );
  }

  removeIngredient(id: number) {
    this.http.delete(this.serverUrl + "/ingredients/remove/" + id).subscribe(
      (data: any) => {
        console.log(data);
        this.ingredients = this.ingredients.filter(i => i.id !== id);
      }
    );
  }
}
