import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { CabinetRoutingModule } from './cabinet-routing.module';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { YandexMapComponent } from '../yandex-map/yandex-map.component';

@NgModule({
  declarations: [
    CabinetComponent,
    YandexMapComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CabinetModule { }
