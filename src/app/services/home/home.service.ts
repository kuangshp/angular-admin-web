import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private readonly baseService: BaseService) {}

  // 测试接口
  homeApi(): Observable<any> {
    return this.baseService.get('admin/activity');
  }
}
