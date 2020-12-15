import { Injectable } from '@angular/core';
import { Product } from './entity/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  public getAll():Product[]{
    return Product.ALL;
  }
}
