import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JaresultGuardService implements CanActivate{

  constructor(private _router: Router) { 
    debugger;
  }

  canActivate(route: ActivatedRouteSnapshot) : boolean {
    let searchText = route.url[1].path;
    if(searchText == ''){
      //this._router.navigate(['welcome']);
      return false;
    }
     return true;
  }
}
