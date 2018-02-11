import { Component } from '@angular/core';
import {AuthServerProvider} from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public auth: AuthServerProvider) {
    auth.isAuthenticate();
    auth.handleAuthentication();

    // auth.scheduleRenewal();
  }

}
