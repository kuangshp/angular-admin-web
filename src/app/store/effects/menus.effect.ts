import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MenusService } from 'src/app/services/menus/menus.service';
import { IMenus } from 'src/app/utils';
import { loadMenusStart, loadMenusSuccess } from '../actions';

@Injectable()
export class MenusEffect {
  constructor(private menusService: MenusService, private actions$: Actions) {}

  loadMenus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMenusStart),
      // 可以传递参数
      mergeMap(() => {
        return this.menusService.menusApi().pipe(
          // 处理请 成功返回的数据
          map((menusVo: IMenus[]) => loadMenusSuccess({ menusVo: menusVo })),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
