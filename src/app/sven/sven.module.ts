import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvenRoutingModule } from './sven-routing.module';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { SvenHomeComponent } from './sven-home/sven-home.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutUsComponent,
    ServicesComponent,
    SvenHomeComponent,
    
  ],
  imports: [
    CommonModule,
    SvenRoutingModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule,
    FormsModule,
  ]
})
export class SvenModule { }
