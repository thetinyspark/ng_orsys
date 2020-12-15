import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CategoryPipe } from './category.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RandomStagiaireComponent } from './random-stagiaire/random-stagiaire.component';
import { CategoryListPipe } from './category-list.pipe';
import { ProductThumbComponent } from './product-thumb/product-thumb.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { CommandCycleComponent } from './command-cycle/command-cycle.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { LoginComponent } from './login/login.component';
import { RecapPaymentComponent } from './recap-payment/recap-payment.component';

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
    CartComponent,
    AccountComponent,
    CommandCycleComponent,
    PaymentFormComponent,
    LoginComponent,
    RecapPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,  
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
