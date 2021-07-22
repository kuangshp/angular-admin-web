import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenusVo } from 'src/app/vo/menus/menus.vo';
import menus from './menus';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  /**获取全部的菜单 */
  menusApi(): Observable<MenusVo> {
    return of(menus);
  }
}
