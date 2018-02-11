import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {LogoutGuard} from './logout.guard';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '' }
];
