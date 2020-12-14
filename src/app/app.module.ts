import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CategoryPipe } from './category.pipe';
import { FormsModule } from '@angular/forms';
import { RandomStagiaireComponent } from './random-stagiaire/random-stagiaire.component';
import { CategoryListPipe } from './category-list.pipe';
import { ProductThumbComponent } from './product-thumb/product-thumb.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CategoryPipe,
    RandomStagiaireComponent,
    CategoryListPipe,
    ProductThumbComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
