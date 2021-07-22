import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { userInfo, X_USER_TOKEN } from 'src/app/constants';
import { ILoginDto } from 'src/app/dto/login/login.dto';
import { LoginService } from 'src/app/services/login/login.service';
import { storage } from 'src/app/utils';
import { LoginVo } from 'src/app/vo/login/login.vo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly message: NzMessageService,
    private readonly loginService: LoginService
  ) {}
  loginValidateForm!: FormGroup;

  ngOnInit() {
    this.loginValidateForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  // 登录事件
  submitForm({ value }: { value: ILoginDto }, ev: Event): void {
    console.log(value, '登录数据');
    ev.preventDefault();
    for (const i in this.loginValidateForm.controls) {
      this.loginValidateForm.controls[i].markAsDirty();
      this.loginValidateForm.controls[i].updateValueAndValidity();
    }
    if (this.loginValidateForm.valid) {
      this.loginService.loginApi(value).subscribe((data: LoginVo) => {
        const { code, message, result } = data;
        if (Object.is(code, 0)) {
          this.message.create('success', message);
          storage.setItem(X_USER_TOKEN, JSON.stringify(result.token));
          storage.setItem(userInfo, JSON.stringify(result));
          // 跳转到首页
          this.router.navigate(['/home']);
        } else {
          this.message.create('error', message);
        }
      });
    } else {
      console.log('表单数据校验不通过');
    }
  }
}
