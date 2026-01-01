import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ExceptionHandlerService implements ErrorHandler {
  handleError(error: unknown): void {
    // HTTP error
    if (error instanceof HttpErrorResponse) return;

    // Application/runtime error
    if (error instanceof Error) {
      console.error('Application error:', error);
      return;
    }

    // Unknown error type
    console.error('Unknown error:', error);
  }
}
