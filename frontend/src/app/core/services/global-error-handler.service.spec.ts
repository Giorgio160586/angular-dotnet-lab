import { describe, expect, it, vi } from 'vitest';
import { GlobalErrorHandlerService } from './global-error-handler.service';

/*
  https://www.youtube.com/watch?v=oMzVtCKsLRc&t=4s
  ng test
*/
describe('GlobalErrorHandlerService', () => {
  it('logs an application error for non-HTTP exceptions"', () => {

    const service = new GlobalErrorHandlerService();
    const appError = new Error('Something went wrong');

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

    service.handleError(appError);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('Application error:', appError);

    consoleSpy.mockRestore();
  });
});
