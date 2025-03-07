import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'goodcook-ui';
  
  routes = [
    { label: "Ingredients", path: '/ingredients'},
    { label: "Recipes", path: '/recipes'},
    { label: "NG Docs", path: '/docs'}
  ];

  constructor(private router: Router) {}

  onTabChange(event: any) {
    const tabIndex = event.index;
    this.router.navigate([
      this.routes[tabIndex].path]
    );
  }
}
