import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CatalogService } from '../catalog.service';
import { Product } from '../entity/product';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public data: Product[]= [];
  public currentCategory:string = "";
  private catalogService:CatalogService;
  private cartService:CartService;

  constructor( service:CatalogService, service2:CartService ) { 
    this.catalogService = service;
    this.cartService = service2;
  }

  public notifyMe(product:Product){
    this.cartService.add(product);
  }

  ngOnInit(): void {
    this.data = this.catalogService.getAll();
  }

}
