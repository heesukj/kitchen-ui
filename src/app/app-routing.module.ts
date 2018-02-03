import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListPageComponent } from './recipe-list-page/recipe-list-page.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SideDishesComponent } from './side-dishes/side-dishes.component';
import { PrepMethodsComponent } from './prep-methods/prep-methods.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe-home', pathMatch: 'full' },    // home page: '/recipe-home'
  { path: 'recipe-detail/:id', component: RecipeDetailComponent },
  { path: 'recipe-list-page', component: RecipeListPageComponent },
  { path: 'recipe-home', component: RecipeHomeComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'side-dishes', component: SideDishesComponent },
  { path: 'prep-methods', component: PrepMethodsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
