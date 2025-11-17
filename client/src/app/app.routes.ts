import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found';
import { DocsComponent } from './components/docs/docs';
import { IngredientListComponent } from './components/ingredient/list/ingredient-list';
import { RecipeListComponent } from './components/recipes/list/recipe-list';

export const routes: Routes = [
    { path: "", redirectTo: "/docs", pathMatch: "full" },
    { path: "docs", component: DocsComponent },
    { path: "ingredients", component: IngredientListComponent },
    { path: "recipes", component: RecipeListComponent },
    { path: "**", component: PageNotFoundComponent },
];