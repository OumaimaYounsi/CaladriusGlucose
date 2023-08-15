import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactListeRoutingModule } from './contact-liste-routing.module';
import { ContactListeComponent } from './contact-liste/contact-liste.component';


@NgModule({
  declarations: [
    ContactListeComponent
  ],
  imports: [
    CommonModule,
    ContactListeRoutingModule
  ]
})
export class ContactListeModule { }
