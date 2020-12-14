import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/product';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public data: Product[]= Product.ALL;

  public currentCategory:string = "";

  constructor() { }

  public notifyMe(product:Product){
    alert(product.name);
  }

  ngOnInit(): void {
  }

}
