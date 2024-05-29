import { Injectable } from '@angular/core';
import { ApiBackendService } from '../api/api-backend.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private apiBackendService: ApiBackendService) { }

  public login(date: any): Observable<any> {
    const json: string = JSON.stringify(date);
    const url: string = 'https://xxline.life/login';

    return this.apiBackendService.post(url, json);
  }
}
