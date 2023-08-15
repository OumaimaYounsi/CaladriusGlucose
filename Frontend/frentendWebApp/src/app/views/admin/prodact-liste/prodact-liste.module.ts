import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdactListeRoutingModule } from './prodact-liste-routing.module';
import { ProdactlisteComponent } from './prodactliste/prodactliste.component';


@NgModule({
  declarations: [
    ProdactlisteComponent
  ],
  imports: [
    CommonModule,
    ProdactListeRoutingModule
  ]
})
export class ProdactListeModule { }
