import { Component, OnInit } from '@angular/core';
import { TitleService } from './services/tools/title/title.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private readonly titleService: TitleService) {}
  ngOnInit(): void {
    console.log('初始化');
    this.titleService.setTitle();
  }
}
