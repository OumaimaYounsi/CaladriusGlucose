import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergencyRoutingModule } from './emergency-routing.module';
import { EmergenciesComponent } from './emergencies/emergencies.component';


@NgModule({
  declarations: [
    EmergenciesComponent
  ],
  imports: [
    CommonModule,
    EmergencyRoutingModule
  ]
})
export class EmergencyModule { }
