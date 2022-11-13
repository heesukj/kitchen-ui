import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    // private location: Location
  ) { }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    // console.log('in getRecipe');
    const id = this.route.snapshot.paramMap.get('id');
    // console.log('in getRecipe, id', id);
    // old way
    // this.recipeService.getRecipe(id).subscribe(recipe => this.recipe = recipe);
    // use with lambda
    this.recipeService.getRecipes().subscribe(recipeRespone => {
      this.recipe = recipeRespone.recipes.find(recipe => recipe.id === id);
    });

  }
}
