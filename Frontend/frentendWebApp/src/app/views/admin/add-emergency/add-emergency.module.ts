import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmergencyRoutingModule } from './add-emergency-routing.module';
import { AddEmergencyComponent } from './add-emergency/add-emergency.component';


@NgModule({
  declarations: [
    AddEmergencyComponent
  ],
  imports: [
    CommonModule,
    AddEmergencyRoutingModule
  ]
})
export class AddEmergencyModule { }
