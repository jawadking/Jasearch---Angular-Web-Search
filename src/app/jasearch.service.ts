import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
 import { Observable, throwError } from 'rxjs';
 import { IResult} from './jaresults/result';
 import { tap , catchError} from 'rxjs/operators';
 


@Injectable({
  providedIn: 'root'
})
export class JasearchService {
  //private _searchAPIUrl = "https://contextualwebsearch-websearch-v1.p.mashape.com/api/Search/WebSearchAPI?q=Donald+Trump&count=50&autocorrect=false";

  constructor(private _http: HttpClient) { }

  getSearchResults(searchText:string): Observable<IResult>{
     let _headers = new HttpHeaders({ 'content-type': 'application/json','X-Mashape-Key':'bqjxBODnBQmshH0iNWExpruIlGHnp115wCUjsnPGrY6JatnoyN','X-Mashape-Host': 'contextualwebsearch-websearch-v1.p.mashape.com' });
     //_headers.append('X-Mashape-Key', 'bqjxBODnBQmshH0iNWExpruIlGHnp115wCUjsnPGrY6JatnoyN');
     //_headers.append('X-Mashape-Host', 'contextualwebsearch-websearch-v1.p.mashape.com');
     
    let searchAPIUrl = "https://contextualwebsearch-websearch-v1.p.mashape.com/api/Search/WebSearchAPI?q=" + searchText +"&count=50&autocorrect=false";
    return this._http.get<IResult>(searchAPIUrl, {headers:_headers}).pipe(tap(data => console.log('All: '+ JSON.stringify(data))) , catchError(this.handleError))
  }

  private handleError (err: HttpErrorResponse){
    debugger;
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
