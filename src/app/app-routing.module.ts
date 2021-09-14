import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './views/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
      },
      {
        path: 'home',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./views/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'file',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./views/file/file.module').then((m) => m.FileModule),
      },
      {
        path: 'system',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./views/system/system.module').then((m) => m.SystemModule),
      },
      {
        path: 'setting',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./views/setting/setting.module').then((m) => m.SettingModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
