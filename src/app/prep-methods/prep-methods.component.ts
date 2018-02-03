import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';  // 2) import
import { Recipe } from '../recipe';

@Component({
  selector: 'app-prep-methods',
  templateUrl: './prep-methods.component.html',
  styleUrls: ['./prep-methods.component.css']
})

export class PrepMethodsComponent implements OnInit {
  router: Router;

  constructor(private _router: Router) {
  this.router = _router;}

  ngOnInit() {
  }

  goToRecipeDetail(recipeId) {
    this.router.navigateByUrl('/recipe-detail/' +recipeId);
  }

}
