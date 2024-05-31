import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent {
  constructor(private route: Router) { this.dutyDoctor(); }

  public dutyDoctor(): void {
    this.route.navigate(['duty-doctor-records']);
  }

  public logout(): void {
    this.route.navigate(['login']);
  }
}
