import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ProgressBarService } from './progress-bar/progress-bar.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './app.component.html',
  selector: 'app-root',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isTurnProgressBar: BehaviorSubject<boolean> = this.progressBarService.stateProgreeBar;

  constructor(private route: Router, private progressBarService: ProgressBarService) { this.route.navigate(['login']) }
}
