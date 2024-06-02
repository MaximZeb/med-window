import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { EventBusService } from 'src/app/event-bus/event-bus.service';
import { AppointmentService } from './appointment.service';

export interface IDoctor {
  nameDoctor: string;
  specialization: string;
}

export interface ILpu {
  id: string;
  nameLPU: string;
  addressLPU: string;
  openingHours: string;
  coordinat: number[];
  doctors: IDoctor[];
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper | undefined;
  public patient$$: any = this.eventBusService.patient$$;
  public patient: any;
  public listLPU: ILpu[] = [];
  public listDoctors: any[] = [];
  public displayedColumns: string[] = ['nameLPU', 'addressLPU', 'openingHours'];
  public displayedColumnsDoctor: string[] = ['nameDoctor', 'specialization'];
  public isLinear: boolean = false;
  public doctors: IDoctor[] = [];
  public editCoordinats: any[] = []

  // Selected data for record with Doctor
  public choseDate: Date | null = null;
  public choseTime: { hour: number; minute: number; } | null = null;
  public selectedLPU: any = null;
  public selectedDoctors: any = null;

  constructor(private eventBusService: EventBusService, private datePipe: DatePipe, private appointmentService: AppointmentService) {
    this.eventBusService.patient$$.subscribe(v => this.patient = v);
    this.listLPU = this.patient.client.listLPU.map((v: any) => {
      return {
        id: v._id,
        nameLPU: v.nameLPU,
        addressLPU: v.addressLPU,
        openingHours: this.datePipe.transform(v.openingHours.openingTime, 'HH:mm') + " - " + this.datePipe.transform(v.openingHours.closingTime, 'HH:mm'),
        coordinat: v.coordinat,
        doctors: v.doctors
      };
    })

    this.editCoordinats = this.listLPU.map(v => {
      return {
        coords: v.coordinat, content: v.nameLPU,
      }
    });

    console.log(this.listLPU);
    console.log(this.editCoordinats);
  }


  ngOnInit(): void {
  }

  public selectLPU(row: any) {
    this.doctors = row.doctors;
    this.stepper?.next();
    console.log(row);
    this.selectedLPU = row;
  }

  public selectDoctor(row: any): void {
    this.stepper?.next();
    console.log(row);
    this.selectedDoctors = row;
  }

  public selectedDate($event: Date): void {
    this.choseDate = $event;
    console.log(this.choseDate);
  }

  public setTime($event: { hour: number; minute: number; }): void {
    this.choseTime = $event;
    console.log(this.choseTime);
  }

  public get isDisable(): boolean {
    return this.choseDate && this.choseTime && this.selectedDoctors && this.selectedLPU;
  }

  public formatDateTime(date: Date, time: { hour: number, minute: number }): string {
    // Установить время на объекте Date
    date.setHours(time.hour, time.minute, 0, 0);

    // Получить строку в формате ISO и удалить суффикс 'Z'
    const offset = date.getTimezoneOffset() * 60000; // В миллисекундах
    const localISOTime = new Date(date.getTime() - offset).toISOString().slice(0, -1);

    return localISOTime;
  }

  public createRecord(): void {
    console.log(this.patient);

    const dataRecord = {
      date: this.formatDateTime(this.choseDate as Date, this.choseTime as { hour: number, minute: number }),
      idLpu: this.selectedLPU.id,
      idDoctor: this.selectedDoctors._id,
      idPatient: this.patient.client._id
    }

    this.appointmentService.createRecord(dataRecord).subscribe(v => console.log(v));
  }
}
