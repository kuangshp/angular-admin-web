import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { AccessComponent } from './access/access.component';
import { SystemRoutingModule } from './system-routing.module';



@NgModule({
  declarations: [
    UserComponent,
    RoleComponent,
    AccessComponent,
  ],
  imports: [
    SystemRoutingModule
  ]
})
export class SystemModule { }
