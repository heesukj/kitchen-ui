import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListPageComponent } from './recipe-list-page/recipe-list-page.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe-home', pathMatch: 'full' },    // home page: '/recipe-home'
  { path: 'recipe-detail/:id', component: RecipeDetailComponent },
  { path: 'recipe-list-page', component: RecipeListPageComponent },
  { path: 'recipe-home', component: RecipeHomeComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
