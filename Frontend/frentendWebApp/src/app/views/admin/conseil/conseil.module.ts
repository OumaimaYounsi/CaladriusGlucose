import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConseilRoutingModule } from './conseil-routing.module';
import { ConseilComponent } from './conseil/conseil.component';


@NgModule({
  declarations: [
    ConseilComponent
  ],
  imports: [
    CommonModule,
    ConseilRoutingModule
  ]
})
export class ConseilModule { }
