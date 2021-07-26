import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { X_USER_TOKEN } from '../constants';
import { MenusState } from '../store/reducers';
import { IMenus, storage } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  menusList!: IMenus[];
  constructor(private router: Router, private readonly store: Store<{ menus: MenusState }>) {
    this.store.pipe(select('menus'), select('menusList')).subscribe((response: IMenus[]) => {
      this.menusList = response;
    });
  }
  /**
   * @Author: 水痕
   * @Date: 2021-07-21 11:16:47
   * @LastEditors: 水痕
   * @Description: 导航需要进入的页面
   * @param {*}
   * @return {*}
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route, state.url);
    return this.routerAuth(state);
  }

  /**
   * @Author: 水痕
   * @Date: 2021-07-21 11:17:23
   * @LastEditors: 水痕
   * @Description: 导航需要进入的子路由
   * @param {*}
   * @return {*}
   */
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(childRoute, state);
    return this.routerAuth(state);
  }

  /**
   * @Author: 水痕
   * @Date: 2021-07-26 17:19:48
   * @LastEditors: 水痕
   * @Description: 判断当前路由是否有权限
   * @param {RouterStateSnapshot} state
   * @return {*}
   */
  private routerAuth(state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (state.url && this.checkLogin) {
      let url: string = state.url;
      if (state.url.startsWith('/')) {
        url = url.substring(1);
      }
      if (this.menusList.find((item: IMenus) => item.url === url)) {
        return true;
      } else if (url === 'home') {
        return true;
      } else {
        this.router.navigateByUrl('/home');
      }
    }
    return this.checkLogin;
  }
  /**
   * @Author: 水痕
   * @Date: 2021-07-21 11:20:46
   * @LastEditors: 水痕
   * @Description: 判断当前用户是否登录
   * @param {*}
   * @return {*}
   */
  private get checkLogin(): Observable<boolean> | boolean {
    if (storage.getItem(X_USER_TOKEN)) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
