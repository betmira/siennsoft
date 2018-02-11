import { Component } from '@angular/core';
import {AuthServerProvider} from '../shared/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public auth: AuthServerProvider) { }

  get expiresAt() {
    return JSON.parse(window.localStorage.getItem('expires_at'));
  }

}
