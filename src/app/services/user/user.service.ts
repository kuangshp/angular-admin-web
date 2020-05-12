import { Injectable } from '@angular/core';
import { ObjectType } from '@app/types';
import { BaseService } from '../base/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  // 用户修改密码
  public modifyPassword$(params: ObjectType): Observable<any> {
    return this.patch('admin/user/modify_password', params);
  }
}
