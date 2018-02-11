import { Injectable } from '@angular/core';
import {Principal} from '../shared/auth/principal.service';
import { AuthServerProvider } from '../shared/auth/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

    constructor(
        private principal: Principal,
        private authServerProvider: AuthServerProvider,
        private router: Router
    ) {}

    login(credentials, callback?) {

        const cb = callback || function() {};
        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe((data) => {
                this.router.navigate(['']);
                return cb();
            }, (err) => {
                this.logout();
                reject(err);
                return cb(err);
             });
        });
    }

    logout() {
        if (this.authServerProvider.isAuthenticate()) {
            this.authServerProvider.logout();
        }
    }
}
