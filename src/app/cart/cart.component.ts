import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../entity/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:Product[] = [];
  constructor(private cartService:CartService) { 
  }

  public removeProduct(current:Product){
    this.cartService.remove(current);
  }

  ngOnInit(): void {
    this.products = this.cartService.getAll();
  }

}
