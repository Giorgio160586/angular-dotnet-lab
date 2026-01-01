import { describe, expect, it, vi } from 'vitest';
import { ExceptionHandlerService } from './exception-handler.service';

describe('ExceptionHandlerService', () => {
  it('logs an application error for non-HTTP exceptions"', () => {

    const service = new ExceptionHandlerService();
    const appError = new Error('Something went wrong');

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

    service.handleError(appError);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('Application error:', appError);

    consoleSpy.mockRestore();
  });
});
