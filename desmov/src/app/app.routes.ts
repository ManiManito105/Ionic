import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth-guard-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/dashboard/home/home.page').then( m => m.HomePage),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/dashboard/profile/profile.page').then( m => m.ProfilePage),
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/dashboard/settings/settings.page').then( m => m.SettingsPage),
    canActivate: [AuthGuard]
  },
];
