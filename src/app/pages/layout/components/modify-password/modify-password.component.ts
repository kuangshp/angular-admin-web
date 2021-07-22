import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.scss'],
})
export class ModifyPasswordComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
    });
  }

  handleOk(): Promise<boolean> | boolean {
    if (this.validateForm.valid) {
      const postData = this.validateForm.value;
      return new Promise((resolve) => {
        console.log(postData);
        resolve(true);
        // this.userService.modifyPassword$(postData).subscribe((data) => {
        //   const { code, message, result } = data;
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
      this.validateFormPanel();
      return false;
    }
  }
  validateFormPanel(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  // 确定密码的时候校验两次密码是否一致
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
