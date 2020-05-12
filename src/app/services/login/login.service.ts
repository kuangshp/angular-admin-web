import { ObjectType } from '@app/types';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  // 获取短信验证码
  public getSmsCode$(mobile: string): Observable<any> {
    return this.get('');
  }

  // 登录请求
  public loginApi$(data: ObjectType): Observable<any> {
    return this.post('', data);
  }
}
