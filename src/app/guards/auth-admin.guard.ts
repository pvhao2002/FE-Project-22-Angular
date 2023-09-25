import {inject, Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router, CanActivateFn,
} from '@angular/router';

@Injectable({
  providedIn: 'root', // you can change to any level if needed
})

class AuthAdminService {
  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = localStorage.getItem('user');
    if (!(user && JSON.parse(user) && JSON.parse(user).roleId === 1)) {
      this.router.navigate(['/']).then();
      return false;
    }
    return true;
  }
}

export const AuthAdminGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthAdminService).canActivate(next, state);
}
