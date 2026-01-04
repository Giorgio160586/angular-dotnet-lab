import { inject, Injectable, Signal } from '@angular/core';
import { ProductModel } from './product.model';
import { HttpClient, HttpContext } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { ADD_AUTHORIZATION, USE_BASE_URL } from '@core/interceptors/http.interceptor.service';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly httpClient = inject(HttpClient);
  private readonly httpContext = new HttpContext()
    .set(USE_BASE_URL, true)
    .set(ADD_AUTHORIZATION, true);

  public getAll(): Signal<ProductModel[]> {
    const products$ = this.httpClient
      .get<ProductModel[]>('/products', { context: this.httpContext })
      .pipe(
        catchError(err => {
          console.error('[ProductsService] getAll', { err });
          return of<ProductModel[]>([]);
        })
      );

    return toSignal(products$, { initialValue: [] });
  }
}
