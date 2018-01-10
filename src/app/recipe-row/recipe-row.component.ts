import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-row',
  templateUrl: './recipe-row.component.html',
  styleUrls: ['./recipe-row.component.css']
})
export class RecipeRowComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
    console.log('in ngOnInit, recipe', this.recipe);
  }

}
