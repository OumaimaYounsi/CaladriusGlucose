import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeviceModelComponent } from './add-device-model/add-device-model.component';

const routes: Routes = [
  {path:'', component:AddDeviceModelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDeviceModeleRoutingModule { }
