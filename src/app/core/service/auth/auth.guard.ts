// Angular
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';

// Miscell
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(select( ngrxState => ngrxState.auth.isAuthenticated), take(1)).toPromise().then(
      isAuthenticated => {

        if (isAuthenticated) {

          return true;
        } else {
          this.router.navigate(['/shops']);
        }
      }
    );
  }
}
