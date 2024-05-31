import { Injectable } from '@angular/core';
import { ApiBackendService } from '../api/api-backend.service';
import { Observable, take, tap } from 'rxjs';
import { EventBusService } from '../event-bus/event-bus.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private apiBackendService: ApiBackendService, private eventBusService: EventBusService) { }

  public login(date: any): Observable<any> {
    const json: string = JSON.stringify(date);
    const url: string = 'https://xxline.life/login';

    return this.apiBackendService.post(url, json).pipe(take(1), tap(v => console.log(v)), tap(v => this.eventBusService.patient$$.next(v)));
  }
}
