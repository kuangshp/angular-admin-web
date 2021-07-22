import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MenusService } from 'src/app/services/menus/menus.service';
import { IMenus } from 'src/app/utils';
import { MenusVo } from 'src/app/vo/menus/menus.vo';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  menusList!: IMenus[];

  constructor(
    private readonly menusService: MenusService,
    private readonly message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.initMenus();
  }
  /**请求菜单接口 */
  initMenus(): void {
    this.menusService.menusApi().subscribe((response: MenusVo) => {
      const { code, message, result } = response;
      if (Object.is(code, 0)) {
        console.log(result, '获取的菜单');
      } else {
        this.message.error(message);
      }
    });
  }
}
