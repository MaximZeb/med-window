import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { EventBusService } from 'src/app/event-bus/event-bus.service';

export interface IDoctor {
  nameDoctor: string;
  specialization: string;
}

export interface ILpu {
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

  constructor(private eventBusService: EventBusService, private datePipe: DatePipe) {
    this.eventBusService.patient$$.subscribe(v => this.patient = v);
    this.listLPU = this.patient.client.listLPU.map((v: any) => {
      return {
        nameLPU: v.nameLPU,
        addressLPU: v.addressLPU,
        openingHours: this.datePipe.transform(v.openingHours.openingTime, 'HH:mm') + " - " + this.datePipe.transform(v.openingHours.closingTime, 'HH:mm'),
        coordinat: v.coordinat,
        doctors: v.doctors
      };
    })


    console.log(this.listLPU);
  }

  ngOnInit(): void {
  }

  public selectLPU(row: any) {
    this.doctors = row.doctors;
    this.stepper?.next();
    console.log(row);
  }

  public selectDoctor(row: any): void {
    this.stepper?.next();
    console.log(row);
  }
}
