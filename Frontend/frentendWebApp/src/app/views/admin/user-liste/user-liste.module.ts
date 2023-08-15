import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListeRoutingModule } from './user-liste-routing.module';
import { UserListeComponent } from './user-liste/user-liste.component';


@NgModule({
  declarations: [
    UserListeComponent
  ],
  imports: [
    CommonModule,
    UserListeRoutingModule
  ]
})
export class UserListeModule { }
