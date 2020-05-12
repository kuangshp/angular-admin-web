import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './views/layout/layout.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard], // 守卫
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        data: {
          title: '首页',
        },
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./views/home/home.module').then(res => res.HomeModule)
      },
      {
        path: 'setting',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./views/setting/setting.module').then(res => res.SettingModule)
      },

    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
