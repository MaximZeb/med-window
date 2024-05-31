import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  public stateProgreeBar: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }
}
