
import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'auth_token';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private readonly _token = signal<string | null>(null);

  get token(): string | null {
    return this._token();
  }

  public setToken(token: string | null) {
    this._token.set(token);
    if (token) {
      localStorage.setItem(STORAGE_KEY, token);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  public clear() {
    this.setToken(null);
  }
}
