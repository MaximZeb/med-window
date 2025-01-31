import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { DialogContentExampleComponent } from 'src/app/dialog-content-example/dialog-content-example.component';
import { EventBusService } from 'src/app/event-bus/event-bus.service';
import { DutyDoctorService } from './duty-doctor.service';
import { ProgressBarService } from 'src/app/progress-bar/progress-bar.service';

@Component({
  selector: 'app-duty-doctor-and-curent-records',
  templateUrl: './duty-doctor-and-curent-records.component.html',
  styleUrls: ['./duty-doctor-and-curent-records.component.scss']
})
export class DutyDoctorAndCurentRecordsComponent implements OnInit {
  @ViewChild('dialogContainer') ymap!: TemplateRef<any>;
  public patient$$: BehaviorSubject<any> = this.eventBusService.patient$$;
  public coordinats: any[] = [];
  public isDutyDoctor: boolean = true;
  public message: string | null = null;

  constructor(private eventBusService: EventBusService, public dialog: MatDialog, private dutyDoctorService: DutyDoctorService, private progressBarService: ProgressBarService) {
    this.eventBusService.patient$$.subscribe(v => console.log(v))
  }

  ngOnInit(): void {
  }

  public openDialog(record: any): void {
    this.coordinats = [{ coords: record.coordinat, content: record.nameLPU }];
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

  public deleteRecord(record: any) {
    const data = {
      idPatient: record.patient,
      idRecord: record._id
    }

    this.progressBarService.stateProgreeBar.next(true);
    this.dutyDoctorService.deleteRecord(data).pipe(
      switchMap(v => this.dutyDoctorService.getRecord().pipe(
        tap(v => this.eventBusService.patient$$.next(v))
      ))
    ).subscribe({
      next: () => {
        this.progressBarService.stateProgreeBar.next(false);
      },
      error: (error) => {
        this.progressBarService.stateProgreeBar.next(false);
        this.message = error.error.message;
      }
    });
  }
}
