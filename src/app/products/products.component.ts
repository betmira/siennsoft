import { Component, OnInit } from '@angular/core';
import  {ProductsService} from './products.service';
import  {Product} from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  providers: [ ProductsService ],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  public columnDefs: { headerName: string; field: string, width?: string }[];
  public rowData: any = [];


  constructor(private productsService: ProductsService) {
    this.columnDefs = [
      {headerName: 'ProduktId', field: 'productID'},
      {headerName: 'Name', field: 'name'},
      {headerName: 'Price', field: 'price'},
      {headerName: 'Description', field: 'description' , width: '300'}
    ];
  }

    ngOnInit() {
    this.productsService.getProductHttp().subscribe(this.onGetSuccess.bind(this),
      this.onGetFailure.bind(this),
     this.onGetCompleted.bind(this)
      );
  }

  private onGetSuccess(products: Product[]) {
    this.rowData = products[0];
  }

  private onGetFailure(err) {
    alert( ' error dowloand Produkts: ' + err);
  }

  private onGetCompleted(err) {

  }
}
