import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-side-dishes',
  templateUrl: './side-dishes.component.html',
  styleUrls: ['./side-dishes.component.css']
})
export class SideDishesComponent implements OnInit {
  router: Router

  constructor(private _router: Router) {
  this.router = _router;
 }

  ngOnInit() {
  }
goToRecipeDetail(recipeId) {
  this.router.navigateByUrl('/recipe-detail/' +recipeId);
}
}
