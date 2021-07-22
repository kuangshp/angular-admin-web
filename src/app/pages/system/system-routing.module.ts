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
  },
  {
    path: 'role',
    component: RoleComponent,
  },
  {
    path: 'access',
    component: AccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
