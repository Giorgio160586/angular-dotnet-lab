import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners, provideEnvironmentInitializer, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { ExceptionHandlerService } from './core/exception-handler/exception-handler.service';
import { HttpInterceptorService } from './core/interceptors/http.interceptor.service';

 
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: { darkModeSelector: '.p-dark' },
      },
    }),
    provideRouter(routes),
    { provide: ErrorHandler, useClass: ExceptionHandlerService },
    provideHttpClient(
      withInterceptors([
        HttpInterceptorService
      ])
    ),
    MessageService,
    provideEnvironmentInitializer(() => {
       
    }),
  ],
};
