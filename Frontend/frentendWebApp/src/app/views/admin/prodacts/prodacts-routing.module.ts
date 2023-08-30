import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdactsComponent } from './prodacts/prodacts.component';

const routes: Routes = [
  {path:'', component:ProdactsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdactsRoutingModule { }
