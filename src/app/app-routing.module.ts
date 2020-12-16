import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { CatalogResolver } from './catalog.resolver';
import { CatalogComponent } from './catalog/catalog.component';
import { CommandCycleComponent } from './command-cycle/command-cycle.component';
import { IsUserConnectedGuard } from './is-user-connected.guard';
import { LoginComponent } from './login/login.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RandomStagiaireComponent } from './random-stagiaire/random-stagiaire.component';
import { RecapPaymentComponent } from './recap-payment/recap-payment.component';
import { ShopModule } from './shop/shop.module';

const routes: Routes = [
  {
    path: "catalog", 
    component: CatalogComponent, 
    resolve: {catalogProducts: CatalogResolver}
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
    loadChildren: () => import('./home/home.module').then( 
      (mod) => {
        return mod.HomeModule
      }
    )
  },
  {
    path: "details/:id", 
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ShopModule],
  exports: [RouterModule, ShopModule]
})
export class AppRoutingModule { }
