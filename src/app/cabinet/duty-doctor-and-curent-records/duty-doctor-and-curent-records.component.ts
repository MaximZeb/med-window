import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventBusService } from 'src/app/event-bus/event-bus.service';

@Component({
  selector: 'app-duty-doctor-and-curent-records',
  templateUrl: './duty-doctor-and-curent-records.component.html',
  styleUrls: ['./duty-doctor-and-curent-records.component.scss']
})
export class DutyDoctorAndCurentRecordsComponent implements OnInit {
  public records$$: BehaviorSubject<any> = this.eventBusService.patient$$;

  constructor(private eventBusService: EventBusService) {
    this.eventBusService.patient$$.subscribe(v => console.log(v))
  }

  ngOnInit(): void {
  }
}
