import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CategoryPipe } from './category.pipe';
import { FormsModule } from '@angular/forms';
import { RandomStagiaireComponent } from './random-stagiaire/random-stagiaire.component';
import { CategoryListPipe } from './category-list.pipe';
import { ProductThumbComponent } from './product-thumb/product-thumb.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CategoryPipe,
    RandomStagiaireComponent,
    CategoryListPipe,
    ProductThumbComponent,
    ProductDetailsComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
