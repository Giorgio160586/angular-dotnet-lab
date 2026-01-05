import { inject, Injectable } from '@angular/core';
import { ProductModel, ProductSchema } from './product.model';
import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
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

  public get(page: number, size: number, query?: string): Observable<[ProductModel[], number]> {
    if (size === 0) return of<[ProductModel[], number]>([[], 0]);
    return this.httpClient
      .get<ProductModel[]>(`/products?page=${page.toString()}&size=${size.toString()}`, { context: this.httpContext })
      .pipe(
        map((res: any) => {
          const items = z.array(ProductSchema).parse(res.item1 ?? []);
          const total = z.number().int().nonnegative().parse(res.item2 ?? 0);
          console.log("[ProductsService] get", { page, size, res, items, total})
          return [items, total] as [ProductModel[], number];
        }),
        catchError(error => {
          const detail = error instanceof ZodError
            ? error.issues.map(i => i.message).join('\n')
            : error.message;

          console.error('[ProductsService] get', { error });
          this.messageService.add({
            severity: 'error',
            summary: `Error ${error.name}`,
            detail
          } as ToastMessageOptions);

          return of<[ProductModel[], number]>([[], 0]);
        })
      );
  }
}
