import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetComponent } from "./cabinet.component";
import { AppointmentComponent } from '../appointment/appointment.component';

const routes: Routes = [
  { path: '', component: CabinetComponent,
    children: [
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
