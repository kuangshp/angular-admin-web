import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/module/shared/shared.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { LoginComponent } from './login.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from 'src/app/store/effects/login.effect';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    LoginRoutingModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    EffectsModule.forFeature([LoginEffect]),
  ],
})
export class LoginModule {}
