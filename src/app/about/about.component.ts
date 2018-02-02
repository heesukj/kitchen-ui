import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  router: Router;

  constructor(private _router: Router) {
  this.router = _router;
  }

  ngOnInit() {
  }

  goToRecipeDetail(recipeId) {
      console.log("in goToRecipeDetail", recipeId);
      this.router.navigateByUrl('recipe-detail/' + recipeId);
    }

}
