import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './pages/layout/layout.component';

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
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'welcome',
        loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
      },
    ],
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
