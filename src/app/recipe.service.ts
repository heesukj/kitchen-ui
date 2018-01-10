import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'; // Error Handling
import { RecipeResponse } from './recipe-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RecipeService {

  // private recipesUrl = 'http://kitchen-svc-prod.us-west-2.elasticbeanstalk.com/recipes';
  //http://localhost:8080/
  private recipesUrl = 'http://localhost:8080/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any> {
    return this.http.get<any>(this.recipesUrl).pipe(
      tap(recipes => this.log('fetched recipes')), // The RecipeService methods will tap into the flow of observable values and send a message (via log()) to the message area at the bottom of the page.
      map(response => {
        console.log('in map, reponse', response);
        return new RecipeResponse(response._embedded.recipes, response.page);
      }),
      catchError(this.handleError('getRecipes', [] )));
  }

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
