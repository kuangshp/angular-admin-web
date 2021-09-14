import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { X_USER_TOKEN } from 'src/app/constants';
import { ILoginDto } from 'src/app/dto/login/login.dto';
// import { LoginService } from 'src/app/services/login/login.service';
import { loadLoginStart } from 'src/app/store/actions';
import { LoginState } from 'src/app/store/reducers';
import { storage } from 'src/app/utils';
import { ILoginVo } from 'src/app/vo/login/login.vo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private isClickLogin: boolean = false;
  loginValidateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private readonly loginService: LoginService,
    private readonly store: Store<{ login: LoginState }>
  ) {
    this.store.pipe(select('login'), select('loginInfo')).subscribe((response: ILoginVo | null) => {
      console.log(response, '订阅了登录信息');
      if (response && this.isClickLogin) {
        storage.setItem(X_USER_TOKEN, JSON.stringify(response.token));
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {
    this.loginValidateForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  // 登录事件
  submitForm({ value }: { value: ILoginDto }, ev: Event): void {
    ev.preventDefault();
    for (const i in this.loginValidateForm.controls) {
      this.loginValidateForm.controls[i].markAsDirty();
      this.loginValidateForm.controls[i].updateValueAndValidity();
    }
    if (this.loginValidateForm.valid) {
      this.isClickLogin = true;
      this.store.dispatch(loadLoginStart(value));
      // this.loginService.loginApi(value).subscribe((result: ILoginVo) => {
      //   storage.setItem(X_USER_TOKEN, JSON.stringify(result.token));
      //   storage.setItem(userInfo, JSON.stringify(result));
      //   // 将登录信息存储到ngrx中
      //   this.store.dispatch(loadLoginSuccess({ ILoginVo: result }));
      //   // 跳转到首页
      //   this.router.navigate(['/home']);
      // });
    } else {
      console.log('表单数据校验不通过');
    }
  }
}
