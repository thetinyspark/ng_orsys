import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../entity/product';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  @Input()
  public data: Product[]= [];

  public currentCategory:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
