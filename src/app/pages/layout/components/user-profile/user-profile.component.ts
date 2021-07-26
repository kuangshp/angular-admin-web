import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LoginState } from 'src/app/store/reducers';
import { storage } from 'src/app/utils';
import { LoginVo } from 'src/app/vo/login/login.vo';
import { ModifyPasswordComponent } from '../modify-password/modify-password.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  username: string | undefined;
  constructor(
    private router: Router,
    private readonly modalService: NzModalService,
    private readonly store: Store<{ login: LoginState }>
  ) {
    this.store.pipe(select('login'), select('loginInfo')).subscribe((data: LoginVo | null) => {
      this.username = data?.username ?? '';
    });
  }

  ngOnInit(): void {}
  // 修改密码
  modifyPassword(): void {
    this.modalService.create({
      nzTitle: '修改密码',
      nzContent: ModifyPasswordComponent,
      nzOnOk: (contentComponentInstance) => {
        return contentComponentInstance.handleOk();
      },
    });
  }
  // 退出
  logout(): void {
    storage.clear();
    this.router.navigateByUrl('/login');
  }
}
