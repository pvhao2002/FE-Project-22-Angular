import {inject, Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router, CanActivateFn,
} from '@angular/router';

@Injectable({
  providedIn: 'root', // you can change to any level if needed
})

class AuthService {
  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = localStorage.getItem('user');
    if (!(user && JSON.parse(user))) {
      this.router.navigate(['/login']).then();
      return false;
    }
    return true;
  }
}

export const
  AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AuthService).canActivate(next, state);
  }
