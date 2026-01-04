import { HttpContextToken, HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { MessageService, ToastMessageOptions } from "primeng/api";
import { catchError, throwError } from "rxjs";

export const ADD_AUTHORIZATION = new HttpContextToken<boolean>(() => true);
export const USE_BASE_URL = new HttpContextToken<boolean>(() => true);

export const HttpInterceptorService: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);

  const addAuth = req.context.get(ADD_AUTHORIZATION);
  const addBaseUrl = req.context.get(USE_BASE_URL);
  const url = addBaseUrl ? 'https://localhost:7295' + req.url : req.url;
  const request = addAuth ? req.clone({
    url,
    // setHeaders: {
    //   Authorization: `Bearer ${auth.token()}` 
    // }
  }) : req.clone({ url });

  return next(request).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse) {
        messageService.add({
          severity: 'error',
          summary: `Error ${error.status}`,
          detail: error.message
        } as ToastMessageOptions);

        console.error('[HttpInterceptorService]', { error });
      }
      return throwError(() => error);
    })
  );
}