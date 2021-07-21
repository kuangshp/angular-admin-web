import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../module/shared/shared.module';
import { NzInputModule } from 'ng-zorro-antd/input';
@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, PagesRoutingModule, LayoutModule, NzInputModule],
})
export class PagesModule {}
