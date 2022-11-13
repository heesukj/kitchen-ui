import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, filter, tap } from 'rxjs/operators'; // Error Handling
import { RecipeResponse } from './recipe-response';

import { Recipe } from './recipe';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RecipeService {

  private recipesUrl = 'https://1876xp43nc.execute-api.us-west-1.amazonaws.com/default/recipes'

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any> {
    // console.log('getRecipes called');
    return this.http.get<any>(this.recipesUrl).pipe(
      tap(recipes => this.log('fetched recipes')), // The RecipeService methods will tap into the flow of observable values and send a message (via log()) to the message area at the bottom of the page.
      map(response => {
        // console.log('in map, response', response);
        return new RecipeResponse(response.recipes, response.page);
      }),
      catchError(this.handleError('getRecipes', [] )));
  }

  getRecipesByTitleContains(title: string): Observable<any> {
    // console.log('getRecipesByTitleContains, title: ' + title);

    // TODO: should do this in the lambda
    const titleFilter = (recipe: Recipe) => {
      return typeof !!recipe.title && recipe.title.toLowerCase().indexOf(title.toLowerCase()) >= 0;
    }

    return this.http.get<any>(this.recipesUrl).pipe(
      tap(recipes => this.log('fetched recipes')), // The RecipeService methods will tap into the flow of observable values and send a message (via log()) to the message area at the bottom of the page.
      map(response => {
        // console.log('in map, response', response);
        if (title) {
          return new RecipeResponse(response.recipes.filter(titleFilter), response.page);
        } else {
          return new RecipeResponse(response.recipes.filter(titleFilter), response.page);
        }
        
      }),
      catchError(this.handleError('getRecipes', [] )));
  }

  // getRecipe(id: string): Observable<Recipe> {
  //   console.log('id: ' + id);
  //   const url = this.recipesUrl + '/' + id;
  //   console.log('url', url);
  //   return this.http.get<Recipe>(url).pipe(
  //     tap(_ => this.log('fetched recipe id=${id}')),
  //      catchError(this.handleError<Recipe>('getRecipe id=${id}'))
  //    );
  // }
  // /** PUT: update the recipe on the server */
  //  updateRecipe(recipe: Recipe): Observable<any> {
  //    return this.http.put(this.recipesUrl, recipe, httpOptions).pipe(  //http.put => three params: URL, data to update, options
  //      tap(_ => this.log('updated hero id=${id}')),
  //      catchError(this.handleError<any>('updateRecipe'))
  //    );
  //  }

  private log(message: string) {
    console.log('RecipeService: ', message);
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
     // TODO: send the error to remote logging infrastructure
     console.error(error);
     // TODO: better job of transforming error for user consumption
     this.log('${operation} failed: ${error.message}');
     // Let the app keep running by returning an empty result.
     return of(result as T);
   };
  }

}
