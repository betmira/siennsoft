import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticationError: boolean;
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder) {
    this.loginForm = fb.group({
      'username' : [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(2) ])]
    });
  }
  loginFun() {
    this.loginService.login({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }).then(() => {
      this.authenticationError = false;
      if (this.router.url === '/login') {
        this.router.navigate(['']);
      }
    }).catch(() => {
      this.authenticationError = true;
    });
  }
  ngOnInit() {}

}
