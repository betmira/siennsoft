import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
// import { LocalStorageService, SessionStorageService } from 'ng2-webstorage/dist/services';
import { SERVER_API_URL } from '../../app.constants';
import {Router} from '@angular/router';

@Injectable()
export class AuthServerProvider {
  constructor(
    private http: Http ,
    public router: Router
  ) {}

  public getToken() {
      return localStorage.getItem('access_token');
  }

  public handleAuthentication(): void {
    this.router.routerState.toString();
    if (!this.isAuthenticate() ) {
      this.router.navigate(['/home']);
    }
  }

  login(credentials): Observable<any> {

    const data = {
      UserName: credentials.username,
      Password: credentials.password
    };
    const body = new FormData();
    body.append('UserName', credentials.username);
    body.append('Password', credentials.password);
    return this.http.post(SERVER_API_URL + 'api/Jwt', body).map(authenticateSuccess.bind(this));
    function authenticateSuccess(resp) {
      const bodyToken = JSON.parse(resp._body);
      if (bodyToken) {
        const bearerToken = bodyToken.access_token;
        if (bearerToken) {
          this.storeAuthenticationToken(bearerToken);
          this.setSession(bodyToken);
          return bearerToken;
        }
      }
    }
  }

  loginWithToken(jwt) {
    if (jwt) {
      this.storeAuthenticationToken(jwt);
      return Promise.resolve(jwt);
    } else {
      return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
    }
  }

  storeAuthenticationToken(jwt) {
    // if (rememberMe) {
    localStorage.setItem('authenticationToken', jwt);

    // } else {
    // this.$sessionStorage.store('authenticationToken', jwt);
    // }
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    localStorage.clear();
    this.router.navigate(['/']);
  }
  public isAuthenticate(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt;
  }

  setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expires_in * 1000) + Date.now());

    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('expires_at', expiresAt);
  }
}
