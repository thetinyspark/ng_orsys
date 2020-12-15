import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../cart.service';
import { CatalogService } from '../catalog.service';
import { Product } from '../entity/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public data:Product | null = null;
  constructor(
    private route:ActivatedRoute, 
    private cartService:CartService, 
    private catalogService:CatalogService
  ) { }

  public onAddToCart(){
    if( this.data !== null )
      this.cartService.add(this.data);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( 
      (map:ParamMap) => {
        const id:string = map.get("id") || "-1";
        this.catalogService.getById(parseInt( id )).subscribe( 
          (product:Product | null) => {
            this.data = product;
          }
        );
      }
    )
  }

}
