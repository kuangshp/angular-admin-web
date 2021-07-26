import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MenusService } from 'src/app/services/menus/menus.service';
import { loadMenusStart } from 'src/app/store/actions';
import { MenusState } from 'src/app/store/reducers';
import { getTreeList, IMenus } from 'src/app/utils';
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
    private readonly message: NzMessageService,
    private readonly store: Store<{ person: MenusState }>
  ) {}

  ngOnInit(): void {
    // this.initMenus();
    this.store.dispatch(loadMenusStart());
  }
  /**请求菜单接口 */
  initMenus(): void {
    this.menusService.menusApi().subscribe((response: MenusVo) => {
      const { code, message, result } = response;
      if (Object.is(code, 0)) {
        this.menusList = getTreeList(result);
        console.log(this.menusList, '格式化菜单后');
      } else {
        this.message.error(message);
      }
    });
  }
}
