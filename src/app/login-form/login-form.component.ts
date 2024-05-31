import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from './login.service';
import { EventBusService } from '../event-bus/event-bus.service';
import { ProgressBarService } from '../progress-bar/progress-bar.service';
import { tap } from 'rxjs/operators';

export interface LoginFormData {
  login: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private route: Router, private loginService: LoginService, private progressBarService: ProgressBarService) { }

  public enterLogin(): void {
    if (this.loginForm.valid) {
      const loginData: LoginFormData = this.loginForm.value;

      this.progressBarService.stateProgreeBar.next(true);
      this.loginService.login(loginData).pipe(
        tap(() => this.progressBarService.stateProgreeBar.next(false))
      ).subscribe(v => {
        this.route.navigate(['cabinet']);
        console.log(v)
      })
    } else {
      console.log('Form is invalid');
    }
  }
}
