import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';  // 2) import
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.css']
})
export class RecipeHomeComponent implements OnInit {

  // @Input() recipe: Recipe;
  router: Router;  // 3) set up the "router variable"

  constructor(private _router: Router) {   // 4) set up for router in the constructor
  this.router = _router;
  }

  ngOnInit() {
    // console.log('in ngOnInit, recipe', this.recipe);
  }

    // 1) implement this function that calls in recipe-home.component.html
  goToRecipeDetail(recipeId) {  // copied from recipe-row.component.ts
    console.log("in goToRecipeDetail", recipeId);
    this.router.navigateByUrl('recipe-detail/' + recipeId); // hard-coded bbq recipe with its id
  }
}
