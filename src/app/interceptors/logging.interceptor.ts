import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { finalize, tap } from 'rxjs/operators';
import { LoggerService } from '../services/tools/logger/logger.service';

@Injectable({ providedIn: 'root' })
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private loggerService: LoggerService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const startTime = Date.now();
    let status: string;
    return next.handle(req).pipe(
      tap(
        event => {
          status = '';
          if (event instanceof HttpResponse) {
            status = 'succeeded';
          }
        },
        error => (status = 'failed')
      ),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const message = `${req.method} ${req.urlWithParams} ${status} in ${elapsedTime} ms`;
        this.loggerService.log(message);
      })
    );
  }
}
