import { Injectable } from '@angular/core';
import { ApiBackendService } from 'src/app/api/api-backend.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private apiBackendService: ApiBackendService) { }

  public createRecord(dataRecord: any) {
    const url: string = 'https://xxline.life/record';
    console.log(dataRecord)
    const jsonObj = JSON.stringify(dataRecord);

    return this.apiBackendService.post(url, jsonObj)
  }
}
