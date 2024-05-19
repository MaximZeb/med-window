import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  templateUrl: './app.component.html',
  selector: 'app-root',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private route: Router) {this.route.navigate(['login'])}
}
