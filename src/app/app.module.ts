import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';

import { AuthServerProvider } from './shared/auth/auth.service';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { LoginComponent } from './login/login.component';
import {SharedModule} from './shared/shared.module';
import { ProductsComponent } from './products/products.component';
import {AgGridModule} from 'ag-grid-angular';
import {LogoutGuard} from './logout.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
  RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([/*optional Angular Components to be used in the grid*/]),
  ],
  providers: [
    AuthServerProvider,
    LogoutGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
