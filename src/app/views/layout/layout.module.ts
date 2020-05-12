import { NgModule } from '@angular/core';

import { SharedModule } from '@app/module/shared/shared.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { TabsetComponent } from './tabset/tabset.component';
import { AppStoreModule } from '@app/store/store.module';
import { ModifyPasswordComponent } from './modify-password/modify-password.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    TabsetComponent,
    ModifyPasswordComponent,
  ],
  entryComponents: [
    ModifyPasswordComponent,
  ],
  imports: [
    LayoutRoutingModule,
    SharedModule,
    AppStoreModule,
  ],
})
export class LayoutModule { }
