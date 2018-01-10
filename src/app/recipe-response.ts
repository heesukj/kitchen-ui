import { Recipe } from './recipe';
import { Page } from './page';
export class RecipeResponse {
  recipes: Recipe[];
  page: Page;

  constructor(recipes: Recipe[], page: Page) {
    this.recipes = recipes;
    this.page = page;
  }
}
