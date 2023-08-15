import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdactsRoutingModule } from './prodacts-routing.module';
import { ProdactsComponent } from './prodacts/prodacts.component';


@NgModule({
  declarations: [
    ProdactsComponent
  ],
  imports: [
    CommonModule,
    ProdactsRoutingModule
  ]
})
export class ProdactsModule { }
