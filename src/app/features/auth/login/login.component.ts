import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { LoginContainerComponent } from '../components/login-container/login-container.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';
import { AppPaths } from '../../../core/enums/app-paths';
import { AuthService } from '../auth.service';
import { AuthResponse, Credentials } from '../auth';
import { CacheService } from '../../../core/services/cache.service';

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
    trigger('entryAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService);
  private cacheService: CacheService = inject(CacheService);
  private router: Router = inject(Router);

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  showEnterPassword = false;
  submitted = false;
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

  onSubmit(): void {
    console.log(this.email.errors, this.password.errors);
    if (this.email.invalid) {
      this.email.markAsTouched();
      return;
    }
    if (this.password.invalid) {
      this.password.markAsTouched();
      return;
    }

    const data: Credentials = {
      username: this.email.value as string,
      password: this.password.value as string,
    };

    console.log(data); // no lo user jajaja
    this.submitted = true;
    const credentials: Credentials = {
      username: 'kminchelle',
      password: '0lelplR',
    };
    this.authService.login(credentials).subscribe((response: AuthResponse) => {
      this.cacheService.setItem('AuthResponse', response);
      this.router.navigate([AppPaths.PAYMENTS]);
      this.submitted = false;
    });
  }
}
