import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenus } from 'src/app/utils';
// import { MenusVo } from 'src/app/vo/menus/menus.vo';
import { BaseService } from '../base/base.service';
// import menus from './menus';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  constructor(private readonly baseService: BaseService) {}
  /**获取全部的菜单 */
  menusApi(): Observable<IMenus[]> {
    // return of(menus);
    return this.baseService.get<IMenus[]>('/admin/menus');
  }
}
