import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginDto } from 'src/app/dto/login/login.dto';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private baseService: BaseService) {}

  loginApi(postData: ILoginDto): Observable<any> {
    return this.baseService.post('admin/login', postData);
  }
}
