import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../entity/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:Product[] = [];
  constructor(private cartService:CartService, private router:Router) { 
  }

  public removeProduct(current:Product):void{
    this.cartService.remove(current);
  }

  public onOrder():void{
    this.router.navigate(["/payment"]);
  }

  ngOnInit(): void {
    this.products = this.cartService.getAll();
  }

}
