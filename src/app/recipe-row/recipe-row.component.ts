import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-row',
  templateUrl: './recipe-row.component.html',
  styleUrls: ['./recipe-row.component.css']
})
export class RecipeRowComponent implements OnInit {

  @Input() recipe: Recipe;
  router: Router;

  constructor(_router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    // console.log('in ngOnInit, recipe', this.recipe);
  }

  goToRecipeDetail() {
    console.log("in goToRecipeDetail", this.recipe);
    this.router.navigateByUrl('recipe-detail/' + this.recipe.id);
  }

}
