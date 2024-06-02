import { ɵparseCookieValue } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {
  constructor(private http: HttpClient) { }

  public post(url: string, date: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, date, {
      headers: headers,
    });
  }
}
