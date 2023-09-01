import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConseilComponent } from './conseil/conseil.component';

const routes: Routes = [
  {path:'', component:ConseilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConseilRoutingModule { }
