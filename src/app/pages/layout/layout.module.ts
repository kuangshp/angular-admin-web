import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/module/shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from './icons-provider.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [SharedModule, IconsProviderModule, LayoutRoutingModule, NzLayoutModule, NzMenuModule],
})
export class LayoutModule {}
