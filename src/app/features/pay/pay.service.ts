import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PayResponse } from './pay';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PayService {
  private http: HttpClient = inject(HttpClient);

  getPayments(skip: number, limit: number): Observable<PayResponse> {
    const params = new HttpParams().set('skip', skip).set('limit', limit);
    return this.http.get<PayResponse>('https://dummyjson.com/products', {
      params,
    });
  }
}
