import { CanActivateFn, Router } from '@angular/router';
import { CacheService } from '../services/cache.service';
import { inject } from '@angular/core';
import { AuthResponse } from '../../features/auth/auth';
import { AppPaths } from '../enums/app-paths';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const cacheService: CacheService = inject(CacheService);
  const authResponse: AuthResponse = cacheService.getItem('AuthResponse');
  return authResponse ? true : router.parseUrl(`/${AppPaths.AUTH}/${AppPaths.LOGIN}`);
};
