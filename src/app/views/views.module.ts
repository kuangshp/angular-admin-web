import { NgModule } from '@angular/core';

import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '@app/module/shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedModule,
    ViewsRoutingModule,
    LayoutModule,
  ]
})
export class ViewsModule { }
