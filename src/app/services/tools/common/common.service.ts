/*
 * @Description:定义公共的发布订阅事件服务
 * @Author: 水痕
 * @Github: https://github.com/kuangshp
 * @Email: 332904234@qq.com
 * @Company:
 * @Date: 2020-01-26 10:50:07
 * @LastEditors  : 水痕
 * @LastEditTime : 2020-01-26 10:58:01
 * @FilePath: /order-admin/src/app/services/tools/common/common.service.ts
 */
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private eventEmit: EventEmitter<any> = new EventEmitter()
  constructor () { }

  /**
   * @Author: 水痕
   * @Date: 2020-01-26 10:52:42
   * @LastEditors: 水痕
   * @Description: 定义一个发布事件的方法
   * @param eventName {String} 事件名
   * @param param {any} 事件携带的参数
   * @return:
   */
  public event(eventName: string, param?: any): void {
    this.eventEmit.emit({
      eventName: eventName,
      param: param
    })
  }

  /**
   * @Author: 水痕
   * @Date: 2020-01-26 10:57:22
   * @LastEditors: 水痕
   * @Description: 订阅事件的方法
   * @param actCode {String} 获取事件
   * @param func {Function} 执行的函数
   * @return:
   */
  public subscribe(actCode: string, func: Function) {
    return this.eventEmit.subscribe((value: any) => {
      if (value.eventName === actCode) {
        return func(value);
      } else {
        return func(null);
      }
    })
  }
}
