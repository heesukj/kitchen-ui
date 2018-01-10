import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { Page } from '../page';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  page: Page;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
      this.getRecipes();
  }

  getRecipes(): void {   // Observable.subscribe() => This asynchronous approach will work when the RecipeService requests recipes from the server.
    this.recipeService.getRecipes().subscribe(data => {
    console.log('in getRecipes, data:', data);
    this.recipes = data.recipes;
    this.page = data.page;
  });  // Create a function to retrieve the recipes from the service.
  }

}
