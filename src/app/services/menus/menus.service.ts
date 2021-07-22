import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import menus from './menus';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  /**获取全部的菜单 */
  menusApi(): Observable<any> {
    return of(menus);
  }
}
