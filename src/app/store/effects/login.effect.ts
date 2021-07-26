import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ILoginDto } from 'src/app/dto/login/login.dto';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginVo } from 'src/app/vo/login/login.vo';
import { loadLoginStart, loadLoginSuccess } from '../actions';

@Injectable()
export class LoginEffect {
  constructor(private loginService: LoginService, private actions$: Actions) {}

  loadLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLoginStart),
      // 可以传递参数
      mergeMap((loginDto: ILoginDto) => {
        return this.loginService.loginApi(loginDto).pipe(
          // 处理请 成功返回的数据
          map((loginVo: LoginVo) => loadLoginSuccess({ loginVo })),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
