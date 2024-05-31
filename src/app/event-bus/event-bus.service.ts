import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  public patient$$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }
}
