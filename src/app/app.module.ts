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

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    PageTitleComponent,
    RecipeSearchComponent,
    RecipeRowComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
