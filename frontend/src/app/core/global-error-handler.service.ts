
import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error: unknown): void {
    // HTTP error
    if (error instanceof HttpErrorResponse) {
      console.error('HTTP error:', error);
      return; // avoid falling through
    }

    // Application/runtime error
    if (error instanceof Error) {
      console.error('Application error:', error);
      return;
    }

    // Unknown error type
    console.error('Unknown error:', error);
  }
}


/*

https://www.youtube.com/watch?v=oMzVtCKsLRc&t=4s

npx playwright install
ng test


*/
