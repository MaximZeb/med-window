import { Injectable } from '@angular/core';
import { ApiBackendService } from '../api/api-backend.service';
import { Observable } from 'rxjs';
import { EventBusService } from '../event-bus/event-bus.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private apiBackendService: ApiBackendService, private eventBusService: EventBusService) { }

  public login(date: any): Observable<any> {
    const json: string = JSON.stringify(date);
    const url: string = 'https://xxline.life/login';

    this.eventBusService.patient$$.next(this.apiBackendService.post(url, json).subscribe())

    return this.apiBackendService.post(url, json);
  }
}
