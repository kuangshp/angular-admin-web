import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/module/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
