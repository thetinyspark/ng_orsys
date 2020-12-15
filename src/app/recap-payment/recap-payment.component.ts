import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../entity/product';

@Component({
  selector: 'app-recap-payment',
  templateUrl: './recap-payment.component.html',
  styleUrls: ['./recap-payment.component.css']
})
export class RecapPaymentComponent implements OnInit {

  public products:Product[] = [];

  constructor(private cartService:CartService) { }

  public getTotalHT():number{
    let total:number = 0;
    this.products.forEach( 
      (current:Product) => {
        total += current.price;
      }
    ); 
    return total;
  }

  public getTotalTTC():number{
    return parseFloat(( this.getTotalHT() * 1.055 ).toPrecision(2)) ;
  }

  ngOnInit(): void {
    this.products = this.cartService.getAll();
  }

}
