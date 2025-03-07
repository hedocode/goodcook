import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found';
import { DocsComponent } from './components/docs/docs';
import { IngredientListComponent } from './components/ingredient/list/ingredient-list';

export const routes: Routes = [
    { path: "", redirectTo: "/docs", pathMatch: "full" },
    { path: "docs", component: DocsComponent },
    { path: "ingredients", component: IngredientListComponent },
    { path: "**", component: PageNotFoundComponent },
];