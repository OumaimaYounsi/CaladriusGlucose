import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddconseilComponent } from './addconseil/addconseil.component';

const routes: Routes = [
  {path:'',component:AddconseilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddconseilRoutingModule { }
