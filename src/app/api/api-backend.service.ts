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
      withCredentials: true
    });
  }

  public get(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(url, {
      headers: headers,
      withCredentials: true
    });
  }
}
