import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginDto } from 'src/app/dto/login/login.dto';
import { ILoginVo } from 'src/app/vo/login/login.vo';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private baseService: BaseService) {}

  loginApi(postData: ILoginDto): Observable<ILoginVo> {
    return this.baseService.post<ILoginVo>('admin/login', postData);
  }
}
