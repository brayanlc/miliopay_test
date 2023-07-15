import { inject, Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  cryptoService: CryptoService = inject(CryptoService);

  clear() {
    sessionStorage.clear();
  }

  getItem<T>(key: string, decrypt = true): any | null | T {
    let item = this.getItemStorage(key);
    if (!item) return null;
    const processedData = decrypt ? this.cryptoService.decrypt(item) : item;
    return JSON.parse(processedData);
  }

  setItem(key: string, data: any, encrypt = true) {
    const item = JSON.stringify(data);
    const processedData = encrypt ? this.cryptoService.encrypt(item) : item;
    sessionStorage.setItem(key, processedData);
  }

  removeKey(key: string) {
    sessionStorage.removeItem(key);
  }

  private getItemStorage(key: string): string | null {
    return sessionStorage.getItem(key);
  }
}
