import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fileObjectField, trimObject, urlObjectParams } from '@app/utils';

interface IobjectType {
  [propsName: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor (private readonly http: HttpClient) { }

  /**
   * 封装一个统一的get请求方法
   * @param url:{String} url地址
   * @param urlParams: {object} url配置参数
   * @param options:配置参数
   */
  public get(
    url: string,
    urlParams?: any,
    options?: {
      params?: IobjectType;
      headers?: IobjectType;
      responseType?: any;
    }
  ): Observable<any> {
    url = urlParams ? `${url}/?${urlObjectParams(urlParams)}` : url;
    const { params, headers, responseType } = options || {
      params: {},
      headers: {},
      responseType: 'json'
    };
    const $params = new HttpParams({ fromObject: params });
    const $headers = new HttpHeaders(headers);
    return this.http.get(url, {
      headers: $headers,
      params: $params,
      responseType
    });
  }

  /**
   * 封装一个put提交数据
   * @param url url地址
   * @param body 请求体
   * @param options 附属内容
   */
  public put(
    url: string,
    body: any | null,
    options?: {
      params?: IobjectType;
      headers?: IobjectType;
    }
  ): Observable<any> {
    const { params, headers } = options || {
      params: {},
      headers: {}
    };
    const $params = new HttpParams({ fromObject: params });
    const $headers = new HttpHeaders(headers);
    return this.http.put(url, fileObjectField(trimObject(body)), {
      headers: $headers,
      params: $params
    });
  }

  /**
   * patch请求方法
   * @param url url地址
   * @param body 请求体
   * @param options 附属条件
   */
  public patch(
    url: string,
    body?: any | null,
    options?: {
      params?: IobjectType;
      headers?: IobjectType;
    }
  ): Observable<any> {
    const { params, headers } = options || { params: {}, headers: {} };
    const $params = new HttpParams({ fromObject: params });
    const $headers = new HttpHeaders(headers);
    if (body && Object.keys(fileObjectField(trimObject(body))).length) {
      return this.http.patch(url, fileObjectField(trimObject(body)), {
        headers: $headers,
        params: $params
      });
    } else {
      return this.http.patch(url, {
        headers: $headers,
        params: $params
      });
    }
  }

  /**
   * post请求的方法
   * @param url url地址
   * @param body 请求体
   * @param options 附属条件
   */
  public post(
    url: string,
    body: any | null,
    options?: {
      params?: IobjectType;
      headers?: IobjectType;
    }
  ): Observable<any> {
    const { params, headers } = options || { params: {}, headers: {} };
    const $params = new HttpParams({ fromObject: params });
    const $headers = new HttpHeaders(headers);
    return this.http.post(url, body, {
      headers: $headers,
      params: $params
    });
  }

  /**
   * 删除数据的方法
   * @param url url地址
   * @param options 附属条件
   */
  public delete(
    url: string,
    options?: {
      params?: IobjectType;
      headers?: IobjectType;
    }
  ): Observable<any> {
    const { params, headers } = options || { params: {}, headers: {} };
    const $params = new HttpParams({ fromObject: params });
    const $headers = new HttpHeaders(headers);
    return this.http.delete(url, {
      headers: $headers,
      params: $params
    });
  }
}
