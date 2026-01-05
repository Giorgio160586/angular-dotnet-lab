import { ErrorHandler, inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService, ToastMessageOptions } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ExceptionHandlerService implements ErrorHandler {
  public readonly messageService = inject(MessageService);

  handleError(error: unknown): void {
    // HTTP error
    if (error instanceof HttpErrorResponse) return;

    // Application/runtime error
    if (error instanceof Error) {
      console.error('Application error:', error);
      this.messageService.add({
        severity: 'error',
        summary: `Error ${error.name}`,
        detail: error.message
      } as ToastMessageOptions);
      return;
    }

    // Unknown error type
    console.error('Unknown error:', error);
  }
}
