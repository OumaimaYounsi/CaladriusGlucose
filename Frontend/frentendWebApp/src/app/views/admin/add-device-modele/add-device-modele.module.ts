import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDeviceModeleRoutingModule } from './add-device-modele-routing.module';
import { AddDeviceModelComponent } from './add-device-model/add-device-model.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddDeviceModelComponent
  ],
  imports: [
    CommonModule,
    AddDeviceModeleRoutingModule,
    FormsModule

  ]
})
export class AddDeviceModeleModule { }
