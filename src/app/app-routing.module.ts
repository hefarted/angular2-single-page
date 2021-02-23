import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SvenRoutingModule } from './sven/sven-routing.module';



const routes: Routes = [
  
];
@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    SvenRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
