import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from '../module/shared/shared.module';
@NgModule({
  declarations: [],
  imports: [SharedModule, PagesRoutingModule, LayoutModule],
})
export class PagesModule {}
