import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { storage } from '@app/utils';
import { Router } from '@angular/router';
import { X_USER_TOKEN, userInfo, X_USER_ID } from '@app/config';
import { LoginService } from '@app/services/login/login.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ValidatorsMobile } from '@app/validators';
import { mobileReg } from '@app/statics';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginValidateForm: FormGroup;
  disabledSMS: boolean = false;
  smsBtnText: string = 'Get sms code';
  constructor (
    private fb: FormBuilder,
    private router: Router,
    private readonly loginService: LoginService,
    private message: NzMessageService
  ) {
    this.loginValidateForm = fb.group({
      mobile: ['', [Validators.required, ValidatorsMobile]],
      passwd: ['', [Validators.required, this.validatorPassword]],
      code: ['', [Validators.required, this.validatorCode]],
    });
  }


  ngOnInit() {

  }
  // 登录事件
  submitForm({ value }: any, ev: Event): void {
    ev.preventDefault();
    for (const i in this.loginValidateForm.controls) {
      this.loginValidateForm.controls[i].markAsDirty();
      this.loginValidateForm.controls[i].updateValueAndValidity();
    }
    if (this.loginValidateForm.valid) {
      const { mobile, passwd, code } = value;
      const postData = {
        mobile,
        passwd,
        smsCode: {
          smsCodeId: storage.getItem('smsCodeId'),
          smsCodeValue: code
        }
      }
      this.loginService.loginApi$(postData).subscribe(data => {
        const { code, message, result } = data;
        if (Object.is(code, 0)) {
          this.message.create('success', message);
          storage.setItem(X_USER_TOKEN, JSON.stringify(result.token));
          storage.setItem(X_USER_ID, JSON.stringify(result.userId));
          storage.setItem(userInfo, JSON.stringify(result));
          // 跳转到首页
          this.router.navigate(['/home']);
        } else {
          this.message.create('error', message);
        }
      })
    }
  }

  // 获取短信验证吗
  async getCode(_: Event): Promise<void> {
    const { value } = this.loginValidateForm.controls.mobile;
    if (value && mobileReg.test(value)) {
      const { code, message, result } = await this.loginService.getSmsCode$(value).toPromise();
      if (Object.is(code, 0)) {
        // 将验证码设置到本地存储中
        storage.setItem('smsCodeId', result, moment().add(5, 'minutes'));
        this.message.create('success', 'SMS verification code has been sent to your phone');
        // 禁止点击发送验证码按钮
        this.disabledSMS = true;
        let maxTime = 60;
        const getCodeState = setInterval(() => {
          this.smsBtnText = `${maxTime}s`;
          maxTime--;
          if (maxTime == 0) {
            window.clearInterval(getCodeState);
            this.disabledSMS = false;
          }
        }, 1000);
      } else {
        this.message.create('error', message);
      }
    }
  }

  /**
   * @Author: 水痕
   * @Date: 2020-03-06 12:41:10
   * @LastEditors: 水痕
   * @Description: 自定义校验code
   * @param {type}
   * @return:
   */
  private validatorCode(control: FormControl): { [key: string]: any } {
    if (control.value) {
      const regCode = /^\d{4}$/;
      let valid = regCode.test(control.value);
      return valid ? null : { code: true };
    } else {
      return null;
    }
  }

  /**
   * @Author: 水痕
   * @Date: 2020-03-06 12:42:23
   * @LastEditors: 水痕
   * @Description: 校验密码规则
   * @param {type}
   * @return:
   */
  private validatorPassword(control: FormControl): { [key: string]: any } {
    if (control.value) {
      const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#\$%\^&\*\(\)\-\_\+=;:'",.\?<>\\/\[\]\{\}\|])[a-zA-Z\d`~!@#\$%\^&\*\(\)\-\_\+=;:'",.\?<>\\/\[\]\{\}\|]{8,20}$/;
      let valid = passwordReg.test(control.value);
      return valid ? null : { password: true };
    } else {
      return null;
    }
  }
}
