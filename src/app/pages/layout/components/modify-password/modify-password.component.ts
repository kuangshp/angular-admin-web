import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.scss'],
})
export class ModifyPasswordComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private message: NzMessageService) {
    this.validateForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
    });
  }

  ngOnInit() {}

  handleOk() {
    if (this.validateForm.valid) {
      const postData = this.validateForm.value;
      return new Promise((resolve) => {
        console.log(postData);
        resolve(true);
        // this.userService.modifyPassword$(postData).subscribe((data: Record<string, any>) => {
        //   const { code, message, result } = data;
        //   console.log(result);
        //   if (Object.is(code, 0)) {
        //     this.message.create('success', message);
        //     resolve(true);
        //   } else {
        //     this.message.create('error', message);
        //     reject(false);
        //   }
        // });
      });
    } else {
      this.message.create('error', '请正确填写数据');
      return false;
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }
  // 校验两次密码是否为一致
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
