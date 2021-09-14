import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { AccountComponent } from './account/account.component';
import { RoleComponent } from './role/role.component';
import { AccessComponent } from './access/access.component';

@NgModule({
  declarations: [AccountComponent, RoleComponent, AccessComponent],
  imports: [CommonModule, SystemRoutingModule],
})
export class SystemModule {}
