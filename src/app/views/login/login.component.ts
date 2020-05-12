import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { storage } from '@app/utils';
import { Router } from '@angular/router';
import { userInfo, X_USER_TOKEN } from '@app/config';
import { LoginService } from '@app/services/login/login.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private readonly loginService: LoginService,
    private message: NzMessageService
  ) { }
  loginValidateForm: FormGroup;


  ngOnInit() {
    this.loginValidateForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  // 登录事件
  submitForm({ value }: any, ev: Event): void {
    ev.preventDefault();
    for (const i in this.loginValidateForm.controls) {
      this.loginValidateForm.controls[i].markAsDirty();
      this.loginValidateForm.controls[i].updateValueAndValidity();
    }
    if (this.loginValidateForm.valid) {
      console.log('登录成功');
      storage.setItem(X_USER_TOKEN, JSON.stringify('1234567'));
      storage.setItem(userInfo, JSON.stringify({ username: '张三' }));
      // 跳转到首页
      this.router.navigate(['/home']);
      // this.loginService.loginApi$(value).subscribe(data => {
      //   const { code, message, result } = data;
      //   if (Object.is(code, 0)) {
      //     console.log(value);
      //     this.message.create('success', message);
      //     storage.setItem(authToken, JSON.stringify(result.token));
      //     storage.setItem(userInfo, JSON.stringify(result));
      //     // 跳转到首页
      //     this.router.navigate(['/home']);
      //   } else {
      //     this.message.create('error', message);
      //   }
      // })
    } else {
      console.log('表单数据校验不通过');
    }
  }
}
