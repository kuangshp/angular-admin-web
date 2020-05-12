import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Observable, of } from 'rxjs';
import menus from './../../statics/menus';

@Injectable({
  providedIn: 'root'
})
export class MenusService extends BaseService {

  // 请求菜单
  public menusApi$(): Observable<any> {
    // return this.get('');
    return of(menus);
  }
}
