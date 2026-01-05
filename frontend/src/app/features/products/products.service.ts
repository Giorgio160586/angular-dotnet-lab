import { inject, Injectable, Signal } from '@angular/core';
import { ProductModel, ProductSchema } from './product.model';
import { HttpClient, HttpContext } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';
import { z, ZodError } from 'zod';
import { ADD_AUTHORIZATION, USE_BASE_URL } from '@core/interceptors/http.interceptor.service';
import { MessageService, ToastMessageOptions } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly messageService = inject(MessageService);
  private readonly httpClient = inject(HttpClient);
  private readonly httpContext = new HttpContext()
    .set(USE_BASE_URL, true)
    .set(ADD_AUTHORIZATION, true);

  public getAll(): Signal<ProductModel[]> {
    const products$ = this.httpClient
      .get<ProductModel[]>('/products', { context: this.httpContext })
      .pipe(
        map((res) => z.array(ProductSchema).parse(res)),
        catchError(error => {  
          const detail = error instanceof ZodError ? Array.from(new Set(error.issues.map(i => i.message))).join('\n') : error.message;
          console.error('[ProductsService] getAll', { error });
                this.messageService.add({
                severity: 'error',
                summary: `Error ${error.name}`,
                detail: detail
              } as ToastMessageOptions);

          return of<ProductModel[]>([]);
        })
      );

    return toSignal(products$, { initialValue: [] });
  }
}
