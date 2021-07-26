import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { LoggerService } from '../services/tools/logger/logger.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class ResponseHandlerInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router,
    private readonly loggerService: LoggerService,
    private readonly message: NzMessageService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      filter((event: any) => {
        if (event instanceof HttpResponse) {
          const status = event.status;
          const body = event.body;
          // 请求成功的时候
          if (status >= 200 && status < 300) {
            const currentUrl: string = event.url ?? '';
            const { code, message } = body;
            if (!Object.is(code, 0)) {
              // token失效跳转到登录页面
              if (Object.is(code, 10042)) {
                this.message.create('warning', message);
                setTimeout(() => {
                  this.router.navigateByUrl('/login');
                });
              } else {
                this.loggerService.error(currentUrl, '当前接口请求错误');
                // TODO是否要在这里弹出一个错误提示
              }
              return false;
            }
            return true;
          } else {
            return true;
          }
        } else {
          return false;
        }
      }),
      map((event: HttpResponse<any>) => event.clone({ body: event.body.result }))
    );
    // return next.handle(req).pipe(
    //   tap(
    //     (event: any): any => {
    //       if (event instanceof HttpResponse) {
    //         const status = event.status;
    //         const body = event.body;
    //         // 请求成功的时候
    //         if (status >= 200 && status < 300) {
    //           const currentUrl: string = event.url ?? '';
    //           const { code, message, result } = body;
    //           if (!Object.is(code, 0)) {
    //             // token失效跳转到登录页面
    //             if (Object.is(code, 10042)) {
    //               this.message.create('warning', message);
    //               setTimeout(() => {
    //                 this.router.navigateByUrl('/login');
    //               });
    //             } else {
    //               this.loggerService.error(currentUrl, '当前接口请求错误');
    //               // TODO是否要在这里弹出一个错误提示
    //             }
    //           } else {
    //             console.log('进来了');
    //             // return of(result);
    //             of(event.clone({ body: result }));
    //           }
    //         }
    //       }
    //     },
    //     (error) => {
    //       // token过期 服务器错误等处理
    //       const status = error.status;
    //       if (status >= 500) {
    //         this.modalService.error({
    //           nzTitle: '<h4>错误提示</h4>',
    //           nzContent: '服务器端错误,请求重新刷新页面',
    //           nzOnOk: () => window.location.reload(),
    //         });
    //       } else if (status === 401) {
    //         this.modalService.confirm({
    //           nzTitle: '<h4>权限提示</h4>',
    //           nzContent: '<b>当前操作没权限,是否跳转到主页</b>',
    //           nzOnOk: () => this.router.navigateByUrl('/home'),
    //         });
    //       } else if (status === 429) {
    //         this.modalService.warning({
    //           nzTitle: '访问受限提示',
    //           nzContent: '你访问过于频繁,等会访问',
    //         });
    //       }
    //     }
    //   )
    // );
  }
}
