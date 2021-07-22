import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/module/shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { IconsProviderModule } from './icons-provider.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ModifyPasswordComponent } from './components/modify-password/modify-password.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';
@NgModule({
  entryComponents: [ModifyPasswordComponent],
  declarations: [LayoutComponent, UserProfileComponent, ModifyPasswordComponent],
  imports: [
    SharedModule,
    IconsProviderModule,
    LayoutRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzModalModule,
    NzFormModule,
    NzMessageModule,
    NzInputModule,
  ],
})
export class LayoutModule {}
