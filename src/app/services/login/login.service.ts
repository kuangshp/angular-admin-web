import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginDto } from 'src/app/dto/login/login.dto';
import { LoginVo } from 'src/app/vo/login/login.vo';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private baseService: BaseService) {}

  loginApi(postData: ILoginDto): Observable<LoginVo> {
    return this.baseService.post<LoginVo>('admin/login', postData);
  }
}
