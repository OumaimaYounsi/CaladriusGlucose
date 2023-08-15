import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from '../../admin/login-admin/login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';

const routes: Routes = [
  {path:'',component:LoginUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserloginRoutingModule { }
