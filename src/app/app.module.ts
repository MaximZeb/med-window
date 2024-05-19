import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from "./AppRoutingModule.module";
import {CabinetModule} from "./cabinet/cabinet/cabinet.module";
import { LoginFormComponent } from './login-form/login-form.component';
import { YandexMapComponent } from './cabinet/yandex-map/yandex-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    YandexMapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CabinetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
