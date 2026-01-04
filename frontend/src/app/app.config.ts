import { ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners, provideEnvironmentInitializer, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ExceptionHandlerService } from './core/exception-handler/exception-handler.service';
import { HttpInterceptorService } from './core/interceptors/http.interceptor.service';
import { definePreset, palette } from '@primeuix/themes';
import { MessageService } from 'primeng/api';

 
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
