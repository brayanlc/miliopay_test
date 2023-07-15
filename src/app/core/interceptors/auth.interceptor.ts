import { inject } from '@angular/core';
import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { CacheService } from '../services/cache.service';
import { AuthResponse } from '../../features/auth/auth';

export function AuthorizationInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) {
  const cacheService: CacheService = inject(CacheService);

  const authResponse: AuthResponse =
    cacheService.getItem<AuthResponse>('AuthResponse');

  if (!authResponse) return next(req);

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: authResponse.token,
    },
  });
  return next(clonedRequest);
}
