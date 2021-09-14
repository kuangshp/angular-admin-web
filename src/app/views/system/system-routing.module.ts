import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { AccountComponent } from './account/account.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/account',
  },
  {
    path: 'account',
    component: AccountComponent,
    data: { title: '账号管理' },
  },
  {
    path: 'role',
    component: RoleComponent,
    data: { title: '角色管理' },
  },
  {
    path: 'access',
    component: AccessComponent,
    data: { title: '资源管理' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
