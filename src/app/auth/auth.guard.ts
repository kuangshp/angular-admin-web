import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { storage } from '@app/utils';
import { X_USER_TOKEN } from '../config';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor (private router: Router) { }
  /**
   * 导航需要进入的页面
   * @param next 下一个
   * @param state 当前的
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(next, state);
    // let url: string = state.url;
    // 这个地方可以进一步判断是否有权限
    return this.checkLogin();
  }
  /**
   * 导航需要进入的子路由
   * @param next 下一个
   * @param state 当前的
   */
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  /**
   * 校验用户是否已登录
   */
  private checkLogin(): Observable<boolean> | boolean {
    if (storage.getItem(X_USER_TOKEN)) {
      return of(true);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
