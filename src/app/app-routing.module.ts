import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CommandCycleComponent } from './command-cycle/command-cycle.component';
import { HomeComponent } from './home/home.component';
import { IsUserConnectedGuard } from './is-user-connected.guard';
import { LoginComponent } from './login/login.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RandomStagiaireComponent } from './random-stagiaire/random-stagiaire.component';
import { RecapPaymentComponent } from './recap-payment/recap-payment.component';

const routes: Routes = [
  {
    path: "catalog", 
    component: CatalogComponent
  },       
  {
    path: "login", 
    component: LoginComponent
  },       
  {
    path: "payment", 
    component: CommandCycleComponent, 
    canActivate: [IsUserConnectedGuard], 
    children: [
      {
        path: "form", 
        component: PaymentFormComponent
      }, 
      {
        path: "recap", 
        component: RecapPaymentComponent
      }, 
      {
        path: "", 
        component: RecapPaymentComponent
      }
    ]
  },      
  {
    path: "me", 
    component: AccountComponent
  },    
  {
    path: "cart", 
    component: CartComponent
  },  
  {
    path: "rng", 
    component: RandomStagiaireComponent
  },
  {
    path: "home", 
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
