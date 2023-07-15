import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse, Credentials } from './auth';
import { Observable } from 'rxjs';
import { CacheService } from '../../core/services/cache.service';
import { Router } from '@angular/router';
import { AppPaths } from '../../core/enums/app-paths';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http: HttpClient = inject(HttpClient);
  private cacheService: CacheService = inject(CacheService);
  private router: Router = inject(Router);

  login(params: Credentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      'https://dummyjson.com/auth/login',
      params,
    );
  }

  logout() {
    this.cacheService.removeKey('AuthResponse');
    this.router.navigate(['/', AppPaths.AUTH, AppPaths.LOGIN]);
  }
}
