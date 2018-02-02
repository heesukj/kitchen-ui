import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeRowComponent } from './recipe-row/recipe-row.component';

import { RecipeService } from './recipe.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListPageComponent } from './recipe-list-page/recipe-list-page.component';
// import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { FooterComponent } from './footer/footer.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SideDishesComponent } from './side-dishes/side-dishes.component';
import { PrepMethodsComponent } from './prep-methods/prep-methods.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    PageTitleComponent,
    RecipeSearchComponent,
    RecipeRowComponent,
    RecipeDetailComponent,
    RecipeListPageComponent,
    // LogInFormComponent,
    RecipeHomeComponent,
    FooterComponent,
    IngredientsComponent,
    ContactComponent,
    AboutComponent,
    SideDishesComponent,
    PrepMethodsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
