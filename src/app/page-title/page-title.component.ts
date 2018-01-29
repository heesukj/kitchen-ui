import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  router: Router;

  constructor(_router: Router) {
    this.router = _router;
  }

  ngOnInit() {
  }

  onSearchClick(searchInput: string) {
    console.log('onSearchClick, searchInput', searchInput);
    this.router.navigateByUrl('recipe-list-page?title=' + searchInput);
  }

}
