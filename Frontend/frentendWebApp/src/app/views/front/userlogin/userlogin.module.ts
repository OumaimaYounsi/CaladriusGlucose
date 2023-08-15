import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserloginRoutingModule } from './userlogin-routing.module';
import { LoginUserComponent } from './login-user/login-user.component';


@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    UserloginRoutingModule
  ]
})
export class UserloginModule { }
