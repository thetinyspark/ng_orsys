import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductThumbComponent } from '../product-thumb/product-thumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductThumbComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,
    ReactiveFormsModule
  ], 

  exports: [ProductThumbComponent, FormsModule, ReactiveFormsModule, RouterModule], 
})
export class ShopModule { }
