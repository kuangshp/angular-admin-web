import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { storage } from 'src/app/utils';
import { ModifyPasswordComponent } from '../modify-password/modify-password.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  username: string = 'admin';
  constructor(private router: Router, private readonly modalService: NzModalService) {}

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
