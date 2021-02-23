import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SvenHomeComponent } from './sven-home/sven-home.component';


const routes: Routes = [
  { 
    path:'sven-web-exam',
    component: SvenHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvenRoutingModule { }
