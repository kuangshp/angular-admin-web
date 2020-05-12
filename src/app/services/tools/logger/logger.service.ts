import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(msg: string): void {
    console.log(msg);
  }

  error(msg: string, title = ''): void {
    console.error(`${title}==>:${msg}`);
  }
  constructor () { }
}
