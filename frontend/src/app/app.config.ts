import { ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ExceptionHandlerService } from './core/services/exception-handler/exception-handler.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/services/http-interceptor/httpErrorInterceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: ErrorHandler, useClass: ExceptionHandlerService },
    provideHttpClient(
      withInterceptors([
        HttpErrorInterceptor
      ])
    )
  ]
};
