import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthServerProvider} from './shared/auth/auth.service';

@Injectable()
export class LogoutGuard implements CanActivate {

  constructor( private authService: AuthServerProvider,
              private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const loggedIn = this.authService.isAuthenticate();
        if (loggedIn) { this.router.navigateByUrl(''); }
    return !loggedIn;
  }
}
