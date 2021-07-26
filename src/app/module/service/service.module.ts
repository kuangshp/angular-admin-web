import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseHandlerInterceptor } from 'src/app/interceptors/response.interceptor';
import { LoggingInterceptor } from 'src/app/interceptors/logging.interceptor';
import { ErrorHandlerInterceptor } from 'src/app/interceptors/error.interceptor';
import { HeaderInterceptor } from 'src/app/interceptors/header.interceptor';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
  ],
})
export class ServiceModule {}
