import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  public patient$$: Subject<any> = new Subject();
  constructor() { }
}
