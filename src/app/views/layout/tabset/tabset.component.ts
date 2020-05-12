import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '@app/services/tools/common/common.service';
import { ObjectType } from '@app/types';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {
  // tabs显示当前选中样式
  currentSelectedIndex: number = 0;
  // 选项卡数组
  tabsList = [];
  // 路由打开记录(做缓存作用)
  selectMenu = {};
  // 当前点击左侧选中的菜单
  currentClickMenu: any;
  // 样式
  tabBarStyle = {
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '8px',
    paddintBottom: '8px',
  };
  // 传递菜单进来
  @Input() sourceMenus: ObjectType[];

  constructor (
    private router: Router,
    private readonly commentService: CommonService,
  ) {
    this.tabsList = [];
    this.commentService.subscribe('selectedMenu', (event: any) => {
      if (event) {
        // 获取当前点击的菜单
        this.currentClickMenu = event.param;
        // 判断当前this.tabsList中是否存在
        const tabOne = this.tabsList.filter(tab => tab.id === this.currentClickMenu.id);
        if (tabOne.length > 0) {
          this.currentSelectedIndex = tabOne[0].index;
          this.selectedTabMenu(tabOne[0]);
        } else {
          const tab = Object.assign(this.currentClickMenu, {
            index: this.tabsList.length,
            enabled: false,
            close: true,
            refresh: 'Y'
          });
          if (this.tabsList.length === 0) {
            tab.enabled = true;
            tab.close = false;
          }
          this.tabsList.push(tab);
          this.currentSelectedIndex = tab.index;
          this.selectedTabMenu(tab);
        }
      }
    });
  }

  ngOnInit() {
    this.tabsList = [];
    this.currentSelectedIndex = 0;
    if (this.tabsList.length === 0) {
      this.tabsList.push({
        id: '0',
        index: 0,
        enabled: true,
        name: '首页',
        close: false,
        icon: 'home',
        url: 'home',
        refresh: 'N'
      });
    }
    // this.router.navigate(['/home']);
    // 刷新到最后一个table页面
    this.lastTab();
  }

  // 选择菜单切换路由
  public selectedTabMenu(tabMenu: any): void {
    let refresh = 'Y';
    // 判断路由是否打开过，如果已打开不刷新，反之，刷新
    refresh = this.selectMenu[tabMenu.id] ? 'N' : 'Y';
    if (!this.selectMenu[tabMenu.id]) {
      // 将该路由存放在路由打开记录中
      this.selectMenu[tabMenu.id] = true;
    } else {
      refresh = 'N';
    }
    this.router
      // 第三个参数是携带在url地址上的附加属性?name=heh&age=20
      // .navigate([tabMenu.url], { queryParams: { refresh } })
      .navigate([tabMenu.url.replace('.', '/')])
      .then(() => {
        console.log('跳转成功了');
      })
      .catch(error => {
        console.log(error);
        this.router.navigate(['/home']);
      });
  }

  // 关闭菜单
  public closeTabNav(tab: any): void {
    this.selectMenu[tab.id] = '';
    if (tab.close) {
      this.tabsList.splice(this.tabsList.indexOf(tab), 1);
      let i = 0;
      this.tabsList.forEach(item => {
        item.index = i++;
      });
      if (this.tabsList.length > 0) {
        // 如果关闭的选项卡索引 等于 激活的选项卡, 关闭选项卡后，打开选中索引前一个
        if (this.currentSelectedIndex && tab.index > this.currentSelectedIndex) {
          this.commentService.event('selectedMenu', this.tabsList[this.currentSelectedIndex]);
        } else {
          this.commentService.event('selectedMenu', this.tabsList[this.currentSelectedIndex - 1]);
        }
      }
    }
  }

  // 刷新浏览器的时候保留最后一个访问地址
  lastTab(): void {
    const currentUrl = this.router.url;
    const urlPathObj = this.sourceMenus.find(m => m.url === currentUrl.substring(1));
    if (urlPathObj) {
      this.tabsList.push(Object.assign(urlPathObj, { select: true, close: true, index: 1 }));
      this.currentSelectedIndex = 1;
      window.document.title = urlPathObj.name;
    } else {
      window.document.title = '首页';
    }
  }
}
