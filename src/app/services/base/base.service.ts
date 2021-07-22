import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { HTTP_TIMEOUT } from 'src/app/constants';
import { object2str, trimObject } from 'src/app/utils';

type ObjectType = Record<string, any>;
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private readonly http: HttpClient) {}

  /**
   * 封装一个统一的get请求方法
   * @param url:{String} url地址
   * @param urlParams: {object} url配置参数
   * @param options:配置参数
   */
  public get<T>(
    url: string,
    urlParams?: ObjectType,
    options?: {
      params?: ObjectType;
      headers?: ObjectType;
      responseType?: any;
    }
  ): Observable<T> {
    url = urlParams ? `${url}/?${object2str(urlParams)}` : url;
    const $params: HttpParams = new HttpParams({ fromObject: options?.params ?? {} });
    const $headers: HttpHeaders = new HttpHeaders(options?.headers ?? {});
    return this.http
      .get<T>(url, {
        headers: $headers,
        params: $params,
        responseType: options?.responseType,
      })
      .pipe(timeout(HTTP_TIMEOUT));
  }

  /**
   * 封装一个put提交数据
   * @param url url地址
   * @param body 请求体
   * @param options 附属内容
   */
  public put<T>(
    url: string,
    id: string | number,
    body: ObjectType | null,
    options?: {
      params?: ObjectType;
      headers?: ObjectType;
    }
  ): Observable<T> {
    const $url = `${url}/${id}`;
    const $params: HttpParams = new HttpParams({ fromObject: options?.params ?? {} });
    const $headers: HttpHeaders = new HttpHeaders(options?.headers ?? {});
    if (body && Object.keys(trimObject(body)).length) {
      return this.http
        .put<T>($url, body, {
          headers: $headers,
          params: $params,
        })
        .pipe(timeout(HTTP_TIMEOUT));
    } else {
      return this.http
        .put<T>($url, null, {
          headers: $headers,
          params: $params,
        })
        .pipe(timeout(HTTP_TIMEOUT));
    }
  }

  /**
   * patch请求方法
   * @param url url地址
   * @param body 请求体
   * @param options 附属条件
   */
  public patch<T>(
    url: string,
    id: string | number,
    body?: ObjectType | null,
    options?: {
      params?: ObjectType;
      headers?: ObjectType;
    }
  ): Observable<T> {
    const $url: string = `${url}/${id}`;
    const $params: HttpParams = new HttpParams({ fromObject: options?.params ?? {} });
    const $headers: HttpHeaders = new HttpHeaders(options?.headers ?? {});
    if (body && Object.keys(trimObject(body)).length) {
      return this.http
        .patch<T>($url, trimObject(body), {
          headers: $headers,
          params: $params,
        })
        .pipe(timeout(HTTP_TIMEOUT));
    } else {
      return this.http
        .patch<T>($url, null, {
          headers: $headers,
          params: $params,
        })
        .pipe(timeout(HTTP_TIMEOUT));
    }
  }

  /**
   * post请求的方法
   * @param url url地址
   * @param body 请求体
   * @param options 附属条件
   */
  public post<T>(
    url: string,
    body: ObjectType | null,
    options?: {
      params?: ObjectType;
      headers?: ObjectType;
    }
  ): Observable<T> {
    const $params: HttpParams = new HttpParams({ fromObject: options?.params ?? {} });
    const $headers: HttpHeaders = new HttpHeaders(options?.headers ?? {});
    if (body && Object.keys(trimObject(body)).length) {
      return this.http
        .post<T>(url, trimObject(body), {
          headers: $headers,
          params: $params,
        })
        .pipe(timeout(HTTP_TIMEOUT));
    } else {
      return this.http
        .post<T>(url, null, {
          headers: $headers,
          params: $params,
        })
        .pipe(timeout(HTTP_TIMEOUT));
    }
  }

  /**
   * 删除数据的方法
   * @param url url地址
   * @param options 附属条件
   */
  public delete<T>(
    url: string,
    id: string | number,
    options?: {
      params?: ObjectType;
      headers?: ObjectType;
    }
  ): Observable<T> {
    const $url: string = `${url}/${id}`;
    const $params: HttpParams = new HttpParams({ fromObject: options?.params ?? {} });
    const $headers: HttpHeaders = new HttpHeaders(options?.headers ?? {});
    return this.http
      .delete<T>($url, {
        headers: $headers,
        params: $params,
      })
      .pipe(timeout(HTTP_TIMEOUT));
  }
}
