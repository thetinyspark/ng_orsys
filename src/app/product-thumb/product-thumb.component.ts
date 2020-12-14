import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../entity/product';

@Component({
  selector: 'app-product-thumb',
  templateUrl: './product-thumb.component.html',
  styleUrls: ['./product-thumb.component.css']
})
export class ProductThumbComponent implements OnInit {

  @Input()
  public data:Product | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
