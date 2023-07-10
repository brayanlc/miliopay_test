import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { LoginContainerComponent } from '../components/login-container/login-container.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterLink } from "@angular/router";
import { AppPaths } from "../../../core/enums/app-paths";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    LoginContainerComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('entradaAnimacion', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  showEnterPassword = false;
  typeInput: 'password' | 'text' = 'password';
  protected readonly appPaths = AppPaths;

  onShowPassword(): void {
    this.email.markAsTouched();
    if (this.email.invalid) {
      return;
    }
    this.showEnterPassword = true;
  }

  showPasswordToggle(): void {
    this.typeInput = this.typeInput === 'password' ? 'text' : 'password';
  }

  backToEmail(): void {
    this.showEnterPassword = false;
    this.typeInput = 'password';
    this.password.reset();
  }
}
