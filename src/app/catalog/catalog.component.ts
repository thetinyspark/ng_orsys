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
    // ici on est dans la méthode ngOnInit de notre composant, on n'a pas besoin de renvoyer une donnée
    // on peut se contenter de l'exploiter directement. Pour ça on utilise la méthode subscribe
    // qui va avoir pour effet de déclencher toute la mécanique de chargement des données. 
    // On récupère ces données puis on les assigne à nos propriétés. 
    this.catalogService.getAll().subscribe( 
      (products:Product[]) => {
        this.data = products;
      }
    );
  }

}
