import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBackendService } from 'src/app/api/api-backend.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private apiBackendService: ApiBackendService) { }

  public createRecord(dataRecord: any): Observable<any> {
    const url: string = 'https://xxline.life/record';
    const jsonObj = JSON.stringify(dataRecord);

    return this.apiBackendService.post(url, jsonObj)
  }

  public getRecord(): Observable<any> {
    const url: string = 'https://xxline.life/client';

    return this.apiBackendService.get(url)
  }
}
