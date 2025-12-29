
import { describe, it, expect, vi } from 'vitest';
import { HttpErrorResponse } from '@angular/common/http';
import { GlobalErrorHandlerService } from './global-error-handler.service';

describe('GlobalErrorHandlerService (Vitest)', () => {
  it('handles HttpErrorResponse and logs "HTTP error:"', () => {
    const service = new GlobalErrorHandlerService();

    const httpError = new HttpErrorResponse({
      status: 500,
      statusText: 'Server Error',
      url: '/api/test',
      error: { message: 'Internal Server Error' },
    });

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    service.handleError(httpError);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('HTTP error:', httpError);

    consoleSpy.mockRestore();
  });
});
``
