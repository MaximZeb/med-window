import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBackendService } from 'src/app/api/api-backend.service';

@Injectable({
  providedIn: 'root'
})
export class DutyDoctorService {
  constructor(private apiBackendService: ApiBackendService) {

  }

  public deleteRecord(data: any): Observable<any> {
    const url: string = 'https://xxline.life/deleteRecords';
    const jsonObj = JSON.stringify(data);

    return this.apiBackendService.post(url, jsonObj);
  }

  public getRecord(): Observable<any> {
    const url: string = 'https://xxline.life/client';
    return this.apiBackendService.get(url)
  }
}
