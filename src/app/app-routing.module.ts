import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListPageComponent } from './recipe-list-page/recipe-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe-list-page', pathMatch: 'full' },
  { path: 'recipe-detail/:id', component: RecipeDetailComponent },
  { path: 'recipe-list-page', component: RecipeListPageComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
