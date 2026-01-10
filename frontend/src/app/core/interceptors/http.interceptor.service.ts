import { HttpContextToken, HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { ConnectionStatusService } from "@core/connection-status/connection-status.service";
import { MessageService, ToastMessageOptions } from "primeng/api";
import { catchError, throwError } from "rxjs";

export const ADD_AUTHORIZATION = new HttpContextToken<boolean>(() => true);
export const USE_BASE_URL = new HttpContextToken<boolean>(() => true);

export const HttpInterceptorService: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);
  const connectionStatus = inject(ConnectionStatusService);
  const router = inject(Router);

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
      console.error(error);
      if (error instanceof HttpErrorResponse) {
        if (error.status === 0) {
          connectionStatus.setDisconnected(error.message);
        }
        else if (error.status === 401){
             router.navigate(['/login']);
        } else {
          messageService.add({
            severity: 'error',
            summary: `Error ${error.status}`,
            detail: error.message
          } as ToastMessageOptions);

          console.error('[HttpInterceptorService]', { error });
        }
      }
      return throwError(() => error);
    })
  );
}