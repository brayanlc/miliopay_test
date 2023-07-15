import { Component, inject, OnInit } from '@angular/core';
import { LoginContainerComponent } from '../components/login-container/login-container.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputOtpComponent } from '../components/input-pin/input-otp.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppPaths } from '../../../core/enums/app-paths';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [
    LoginContainerComponent,
    ButtonComponent,
    InputOtpComponent,
    ReactiveFormsModule,
  ],
  template: `
    <app-login-container>
      <h2>Iniciar sesión con clave dinámica</h2>
      <p class="info my-12 text-center w-[60%] ">
        Hemos enviado un código de verificación al celular
        <strong>(+57) 3150000001</strong>
      </p>

      <app-input-otp [formControl]="otpForm"></app-input-otp>

      <p class="time mt-12">Tiempo de espera 00:{{ countdown }}</p>
      <button class="mt-2" [disabled]="countdown" (click)="reSendCode()">
        Reenviar código
      </button>
    </app-login-container>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 90%;
        max-width: 700px;
      }

      .info {
        color: #242424;
        font-weight: 400;
        font-size: 18px;
      }

      .time {
        color: #707070;
        font-weight: 500;
        font-size: 18px;
      }

      button {
        padding: 0.8rem 1rem;
        width: auto;
        font-size: 20px;
      }
    `,
  ],
})
export class OtpComponent implements OnInit {
  private router: Router = inject(Router);

  protected readonly appPaths = AppPaths;
  countdown: number = 59;
  intervalId: any;
  otpForm = new FormControl('');

  ngOnInit() {
    this.startCountdown();
    this.optListener();
  }

  optListener() {
    this.otpForm.valueChanges.subscribe((otp) => {
      if (otp?.length === 4) {
        this.router.navigate([this.appPaths.PAYMENTS]);
      }
      console.log(otp);
    });
  }

  reSendCode() {
    this.countdown = 59;
    this.startCountdown();
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.intervalId);
  }
}
