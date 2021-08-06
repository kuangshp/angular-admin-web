import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(private titleService: Title, private readonly activatedRoute: ActivatedRoute) {}

  public setTitle() {
    this.activatedRoute.data.subscribe((res) => {
      console.log(res, '===');
      this.titleService.setTitle('待测试');
    });
  }
}
