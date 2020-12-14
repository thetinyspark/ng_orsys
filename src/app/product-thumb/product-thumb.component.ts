import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../entity/product';

@Component({
  selector: 'app-product-thumb',
  templateUrl: './product-thumb.component.html',
  styleUrls: ['./product-thumb.component.css']
})
export class ProductThumbComponent implements OnInit {

  @Input()
  public data:Product | null = null;

  @Output()
  public onAddToCart:EventEmitter<Product>;

  constructor() { 
    this.onAddToCart = new EventEmitter<Product>();
  }

  public addToCart(){
    if( this.data !== null )
      this.onAddToCart.emit(this.data);
  }

  ngOnInit(): void {
  }

}
