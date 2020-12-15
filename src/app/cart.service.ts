import { Injectable } from '@angular/core';
import { Product } from './entity/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products:Product[] = [];
  constructor() { }

  public add(product:Product){
    this.products.push(product);
    alert(product.name + "a été ajouté au panier !");
  }

  public remove(product:Product){
    const index:number = this.products.indexOf(product);
    this.products.splice( index, 1 );
  }

  public getAll():Product[]{
    return this.products;
  }
}
