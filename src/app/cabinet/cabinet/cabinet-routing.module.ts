import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetComponent } from "./cabinet.component";
import { AppointmentComponent } from '../appointment/appointment.component';
import { DutyDoctorAndCurentRecordsComponent } from '../duty-doctor-and-curent-records/duty-doctor-and-curent-records.component';

const routes: Routes = [
  {
    path: '', component: CabinetComponent,
    children: [
      {
        path: 'duty-doctor-records', component: DutyDoctorAndCurentRecordsComponent,
      },
      {
        path: 'record', component: AppointmentComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetRoutingModule { }
