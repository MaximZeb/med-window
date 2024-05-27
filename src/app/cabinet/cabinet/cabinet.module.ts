import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { CabinetRoutingModule } from './cabinet-routing.module';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { YandexMapComponent } from '../yandex-map/yandex-map.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import { MatStepperModule } from '@angular/material/stepper';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    CabinetComponent,
    YandexMapComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatTableModule
  ]
})
export class CabinetModule { }
