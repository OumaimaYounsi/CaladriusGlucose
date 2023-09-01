import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddconseilRoutingModule } from './addconseil-routing.module';
import { AddconseilComponent } from './addconseil/addconseil.component';


@NgModule({
  declarations: [
    AddconseilComponent
  ],
  imports: [
    CommonModule,
    AddconseilRoutingModule
  ]
})
export class AddconseilModule { }
