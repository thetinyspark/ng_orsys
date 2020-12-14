import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../entity/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  public data:Product | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
