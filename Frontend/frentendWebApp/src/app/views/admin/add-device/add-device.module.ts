import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDeviceRoutingModule } from './add-device-routing.module';
import { AddDeviceComponent } from './add-device/add-device.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddDeviceComponent
  ],
  imports: [
    CommonModule,
    AddDeviceRoutingModule,
    FormsModule
  ]
})
export class AddDeviceModule { }
