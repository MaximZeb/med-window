import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { CabinetRoutingModule } from './cabinet-routing.module';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    CabinetComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CabinetModule { }
