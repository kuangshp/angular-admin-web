import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { X_USER_TOKEN } from '../constants';
import { storage } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}
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
    console.log(route, state);
    return this.checkLogin();
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
    return this.checkLogin();
  }

  /**
   * @Author: 水痕
   * @Date: 2021-07-21 11:20:46
   * @LastEditors: 水痕
   * @Description: 判断当前用户是否登录
   * @param {*}
   * @return {*}
   */
  private checkLogin(): Observable<boolean> | boolean {
    if (storage.getItem(X_USER_TOKEN)) {
      return of(true);
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
