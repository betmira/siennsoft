export class Product {

  productID: number;
  name: string;
  price: number;
  description: string;

  constructor(attrs: {productID?: number, name?: string, price?: number, description?: string}= {}) {
    this.productID = attrs.productID;
    this.name = attrs.name;
    this.price = attrs.price;
    this.description = attrs.description;
  }
}
