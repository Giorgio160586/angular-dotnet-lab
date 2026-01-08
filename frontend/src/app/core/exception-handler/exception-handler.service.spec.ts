import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ExceptionHandlerService } from './exception-handler.service';
import { MessageService } from 'primeng/api';

describe('ExceptionHandlerService (TestBed)', () => {
  let service: ExceptionHandlerService;
  let messageServiceMock: { add: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    messageServiceMock = {
      add: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        ExceptionHandlerService,
        {
          provide: MessageService,
          useValue: messageServiceMock
        }
      ]
    });

    service = TestBed.inject(ExceptionHandlerService);
  });

  it('logs an application error for non-HTTP exceptions', () => {
    const appError = new Error('Something went wrong');
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    service.handleError(appError);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('Application error:', appError);

    expect(messageServiceMock.add).toHaveBeenCalledTimes(1);
    expect(messageServiceMock.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: `Error ${appError.name}`,
      detail: appError.message
    });

    consoleSpy.mockRestore();
  }); 
});
