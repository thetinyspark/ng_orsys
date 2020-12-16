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
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { CommandCycleComponent } from './command-cycle/command-cycle.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { LoginComponent } from './login/login.component';
import { RecapPaymentComponent } from './recap-payment/recap-payment.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { StoreModule } from '@ngrx/store';
import { clockReducer } from './reducers/clock.reducer';



@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CategoryPipe,
    RandomStagiaireComponent,
    CategoryListPipe,
    ProductDetailsComponent,
    CartComponent,
    AccountComponent,
    CommandCycleComponent,
    PaymentFormComponent,
    LoginComponent,
    RecapPaymentComponent
  ],
  imports: [
    StoreModule.forRoot({clock: clockReducer}),
    MatSliderModule,
    BrowserModule,
    AppRoutingModule, 
    FormsModule,  
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
