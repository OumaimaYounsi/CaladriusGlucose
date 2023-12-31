import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListeModule } from './user-liste.module';
import { UserListeComponent } from './user-liste/user-liste.component';

const routes: Routes = [
  {path:'', component:UserListeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListeRoutingModule { }
