import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { AppPaths } from './core/enums/app-paths';
import { authGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: AppPaths.PAYMENTS,
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/pay/payments/payments.component').then(
            (c) => c.PaymentsComponent,
          ),
      },
      {
        path: AppPaths.PROFILE,
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/users/profile/profile.component').then(
            (c) => c.ProfileComponent,
          ),
      },
    ],
  },
  {
    path: AppPaths.AUTH,
    component: AuthLayoutComponent,
    children: [
      {
        path: AppPaths.LOGIN,
        loadComponent: () =>
          import('./features/auth/login/login.component').then(
            (c) => c.LoginComponent,
          ),
      },
      {
        path: AppPaths.OTP,
        loadComponent: () =>
          import('./features/auth/otp/otp.component').then(
            (c) => c.OtpComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
