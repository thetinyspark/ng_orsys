import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RandomStagiaireComponent } from './random-stagiaire/random-stagiaire.component';

const routes: Routes = [
  {
    path: "catalog", 
    component: CatalogComponent
  },  
  {
    path: "rng", 
    component: RandomStagiaireComponent
  },
  {
    path: "home/:tartampion", 
    component: HomeComponent
  },
  {
    path: "details/:id", 
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
