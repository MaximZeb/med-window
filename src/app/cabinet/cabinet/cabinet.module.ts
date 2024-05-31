import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { CabinetRoutingModule } from './cabinet-routing.module';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { YandexMapComponent } from '../yandex-map/yandex-map.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from "@angular/material/table";
import { DutyDoctorAndCurentRecordsComponent } from '../duty-doctor-and-curent-records/duty-doctor-and-curent-records.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CabinetComponent,
    YandexMapComponent,
    AppointmentComponent,
    DutyDoctorAndCurentRecordsComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatTableModule,
    MatCardModule
  ]
})
export class CabinetModule { }
