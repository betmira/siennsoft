import { Injectable } from '@angular/core';
import {SERVER_API_URL} from '../app.constants';
import {AuthServerProvider} from '../shared/auth/auth.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Product} from './product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {
  constructor( private http: Http, private authServerProvider: AuthServerProvider ) {}

  getProductHttp(): Observable<Product[]> {
    const token = this.authServerProvider.getToken();
    const options = new RequestOptions({});
    options.headers = new  Headers({'Authorization': 'Bearer ' + token});
    return this.http.get(SERVER_API_URL + 'api/Products', options).map(getProductsSuccess.bind(this), getProductsSuccess.bind(this));
    function getProductsSuccess(resp) {
      const usersJson: Product[] = Array.of( JSON.parse(resp._body) );
      return usersJson;
    }
  }
}
