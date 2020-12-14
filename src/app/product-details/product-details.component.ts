import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../entity/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public data:Product | null = null;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( 
      (map:ParamMap) => {
        const all:Product[] = Product.ALL;
        const id:string = map.get("id") || "-1";
        for (let i:number = 0; i < all.length; i++ ){
          const current:Product = all[i];
          if( current.id === parseInt(id)){
            this.data = current;
          }
        }
      }
    )
  }

}
