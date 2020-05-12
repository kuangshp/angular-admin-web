/*
 * @Description:自定义一个window.localStorage存储过程
 * @Author: 水痕
 * @Github: https://github.com/kuangshp
 * @Email: 332904234@qq.com
 * @Company:
 * @Date: 2019-08-16 10:49:46
 * @LastEditors  : 水痕
 * @LastEditTime : 2019-12-20 11:21:32
 */

class LocalStorage {
  private prefix: string;

  constructor(prefix: string = 'web') {
    this.prefix = prefix;
  }

  /**
   * @Author: 水痕
   * @Date: 2019-12-09 17:44:17
   * @LastEditors: 水痕
   * @Description: 获取本地存储的方法
   * @param key 当前的key
   */
  public getItem(key: string) {
    key = this.getKey(key);
    const storeData: string | null = window.localStorage.getItem(key);
    if (storeData) {
      const {
        value,
        options: { storeTime },
      } = JSON.parse(storeData);
      // 如果从存储中获取的时间大于当前的时间或者等于0的时候表示当前的localStorage有效
      if (storeTime > new Date().getTime()) {
        return value;
      } else {
        this.removeItem(key);
        return null;
      }
    }
    return null;
  }

  /**
   * @Author: 水痕
   * @Date: 2019-12-09 17:44:07
   * @LastEditors: 水痕
   * @Description: 设置存储
   * @param key key的值
   * @param value value值
   * @param time 超时时间
   */
  public setItem(key: string, value: string, time?: any): void {
    key = this.getKey(key);
    // 如果用户没传递时间进来就是一天
    try {
      time = new Date(time).getTime() || time.getTime();
    } catch (e) {
      time = new Date().getTime() + 1000 * 60 * 60 * 24 * 1;
    }
    const options: { [propsName: string]: any } = {
      storeTime: time,
      prefix: this.prefix,
    };
    window.localStorage.setItem(key, JSON.stringify({ value, options }));
  }

  /**
   * @Author: 水痕
   * @Date: 2019-12-09 17:43:54
   * @LastEditors: 水痕
   * @Description: 删除存储
   * @param key key值
   */
  public removeItem(key: string): void {
    key = this.getKey(key);
    const value: string | null = this.getItem(key);
    if (value) {
      window.localStorage.removeItem(key);
    }
  }

  /**
   * @Author: 水痕
   * @Date: 2019-12-09 17:43:12
   * @LastEditors: 水痕
   * @Description: 清除本地存储的
   * @return:
   */
  public clear(): void {
    window.localStorage.clear();
  }

  /**
   * @Author: 水痕
   * @Date: 2019-12-09 17:44:31
   * @LastEditors: 水痕
   * @Description: 私有方法获取key
   * @param key key值
   */
  private getKey(key: string): string {
    return `${this.prefix}:${key}`;
  }
}

export const storage = new LocalStorage('sea');
