import { Injectable } from '@angular/core';
import { enc, mode, pad, MD5, TripleDES } from 'crypto-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private static CONFIG = {
    mode: mode.ECB,
    padding: pad.Pkcs7,
  };

  encrypt(message: string, key?: string): string {
    const toEncryptedArray = enc.Utf8.parse(message);
    let payload;
    if (key) {
      payload = TripleDES.encrypt(
        toEncryptedArray,
        this.getKey(key),
        CryptoService.CONFIG,
      );
    } else {
      payload = TripleDES.encrypt(
        toEncryptedArray,
        this.getKey(),
        CryptoService.CONFIG,
      );
    }

    return payload.ciphertext.toString(enc.Base64);
  }

  decrypt(message: string, key?: string): string {
    let payload;
    if (key) {
      payload = TripleDES.decrypt(
        message,
        this.getKey(key),
        CryptoService.CONFIG,
      );
    } else {
      payload = TripleDES.decrypt(message, this.getKey(), CryptoService.CONFIG);
    }

    return payload.toString(enc.Utf8);
  }

  private getKey(keyUrl?: string) {
    let securityKeyArray;
    if (keyUrl) {
      securityKeyArray = MD5(keyUrl).toString();
    } else {
      securityKeyArray = MD5(environment.key).toString();
    }
    securityKeyArray += securityKeyArray.substring(0, 16);

    return enc.Hex.parse(securityKeyArray);
  }
}
