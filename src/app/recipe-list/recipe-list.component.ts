import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { Page } from '../page';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  page: Page;
  router: Router;

  constructor(private recipeService: RecipeService, private _router: Router,
    private activatedRoute: ActivatedRoute) {
      this.router = _router;
      // from https://stackoverflow.com/questions/38036498/cant-reload-refresh-active-route
      this.router.events.subscribe( (e: any) => {
        if (e instanceof NavigationEnd) {
          this.ngOnInit();
        }
      });
  }

  ngOnInit() {
    let title = this.activatedRoute.snapshot.queryParams["title"];

    console.log('title', title);

    if (title) {
      this.getRecipesByTitleContains(title);
    } else {
      this.getRecipes();
    }
  }

  getRecipes(): void {   // Observable.subscribe() => This asynchronous approach will work when the RecipeService requests recipes from the server.
    this.recipeService.getRecipes().subscribe(data => {
      console.log('in getRecipes, data:', data);
      this.recipes = data.recipes;
      this.page = data.page;
    });  // Create a function to retrieve the recipes from the service.
  }

  getRecipesByTitleContains(title): void {   // Observable.subscribe() => This asynchronous approach will work when the RecipeService requests recipes from the server.
    this.recipeService.getRecipesByTitleContains(title).subscribe(data => {
    console.log('in getRecipesByTitleContains, data:', data);
    this.recipes = data.recipes;
    this.page = data.page;
  });  // Create a function to retrieve the recipes from the service.
  }

}
