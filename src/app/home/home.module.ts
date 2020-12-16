import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatSliderModule, 
    RouterModule.forChild(
      [
        {
          path: "", 
          component: HomeComponent
        }
      ]
    )
  ], 

  exports: [RouterModule, MatSliderModule]
})
export class HomeModule { }
