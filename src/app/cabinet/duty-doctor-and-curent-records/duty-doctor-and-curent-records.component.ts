import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { DialogContentExampleComponent } from 'src/app/dialog-content-example/dialog-content-example.component';
import { EventBusService } from 'src/app/event-bus/event-bus.service';

@Component({
  selector: 'app-duty-doctor-and-curent-records',
  templateUrl: './duty-doctor-and-curent-records.component.html',
  styleUrls: ['./duty-doctor-and-curent-records.component.scss']
})
export class DutyDoctorAndCurentRecordsComponent implements OnInit {
  @ViewChild('dialogContainer') ymap!: TemplateRef<any>;
  public patient$$: BehaviorSubject<any> = this.eventBusService.patient$$;
  public coordinats: number[] = [];
  public isDutyDoctor: boolean = true;

  constructor(private eventBusService: EventBusService, public dialog: MatDialog) {
    this.eventBusService.patient$$.subscribe(v => console.log(v))
  }

  ngOnInit(): void {
  }

  public openDialog(coordinate: number[]): void {
    this.coordinats = coordinate;
    console.log(this.ymap);
    const dialogRef = this.dialog.open(DialogContentExampleComponent, {
      width: '700px',
      height: '600px',
      data: {
        template: this.ymap
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public recordDutyDoctor(): void {
    this.isDutyDoctor = !this.isDutyDoctor;
  }
}
