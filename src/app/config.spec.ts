import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { AccountComponent } from "./account/account.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartService } from "./cart.service";
import { CartComponent } from "./cart/cart.component";
import { CatalogResolver } from "./catalog.resolver";
import { CatalogService } from "./catalog.service";
import { CatalogComponent } from "./catalog/catalog.component";
import { CategoryListPipe } from "./category-list.pipe";
import { CategoryPipe } from "./category.pipe";
import { CommandCycleComponent } from "./command-cycle/command-cycle.component";
import { LoginComponent } from "./login/login.component";
import { PaymentFormComponent } from "./payment-form/payment-form.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductThumbComponent } from "./product-thumb/product-thumb.component";
import { RandomStagiaireComponent } from "./random-stagiaire/random-stagiaire.component";
import { RecapPaymentComponent } from "./recap-payment/recap-payment.component";
import { ShopModule } from "./shop/shop.module";

export const configModule = {

    declarations: [
        AppComponent,
        CatalogComponent,
        CategoryPipe,
        CategoryListPipe,
        RandomStagiaireComponent,
        ProductDetailsComponent,
        CartComponent,
        AccountComponent,
        CommandCycleComponent,
        PaymentFormComponent,
        LoginComponent,
        RecapPaymentComponent, 
        ProductThumbComponent
    ],
    imports: [
        RouterTestingModule, 
        HttpClientModule, 
        BrowserModule,
        AppRoutingModule, 
        FormsModule,  
        ReactiveFormsModule,
        HttpClientModule, 
        ShopModule
    ], 

    exports: [
        RouterTestingModule.withRoutes( 
            [
                {
                    path: "catalog", 
                    component: CatalogComponent, 
                    resolve: {catalogProducts: CatalogResolver}
                  }
            ]
        ), 
        HttpClientModule, 
        BrowserModule,
        AppRoutingModule, 
        FormsModule,  
        ReactiveFormsModule,
        HttpClientModule, 
        ShopModule
    ], 
    
    providers: [CatalogResolver, CatalogService, CartService ]
}