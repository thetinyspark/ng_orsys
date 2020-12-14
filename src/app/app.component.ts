import { Component } from '@angular/core';
import { Product } from './entity/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public zigouigoui:Product[] =  [];

  constructor() {


    this.zigouigoui = [
      {
        id: 1,
        category: "fantasy",
        img: "https://images-na.ssl-images-amazon.com/images/I/514zjw9CZoL._SX331_BO1,204,203,200_.jpg",
        name: "Le Prieuré de l'Oranger",
        price: 24.90
      },
      {
        id: 2,
        category: "polar",
        img: "https://images-na.ssl-images-amazon.com/images/I/51CgqNK8FiL._SX350_BO1,204,203,200_.jpg",
        name: "Le Porteur de Mort",
        price: 24.90
      },
      {
        id: 3,
        category: "fantasy",
        img: "https://images-na.ssl-images-amazon.com/images/I/41qyn3AopML._SX309_BO1,204,203,200_.jpg",
        name: "Final Fantasy XV - The Dawn of the Future",
        price: 17
      },
      {
        id: 4,
        category: "book",
        img: "https://images-na.ssl-images-amazon.com/images/I/51Fm6KpKPOL._SX320_BO1,204,203,200_.jpg",
        name: "Les Elfes - l'intégrale",
        price: 25
      },
      {
        id: 5,
        category: "book",
        img: "https://images-na.ssl-images-amazon.com/images/I/4128jWyiRAL._SX322_BO1,204,203,200_.jpg",
        name: "Les enfants de D'hara",
        price: 15.90
      }
    ];
  }

}
