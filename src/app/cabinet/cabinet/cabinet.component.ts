import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { take } from 'rxjs';
import { ApiBackendService } from 'src/app/api/api-backend.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent {
  constructor(private route: Router, private apiBackendService: ApiBackendService) { this.dutyDoctor(); }

  public dutyDoctor(): void {
    this.route.navigate(['duty-doctor-records']);
  }

  public logout(): void {
    this.apiBackendService.get('https://xxline.life/logout').pipe(take(1)).subscribe();

    setTimeout(() => this.route.navigate(['login']), 500);
  }
}
