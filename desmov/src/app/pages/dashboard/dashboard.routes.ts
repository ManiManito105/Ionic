import { Routes } from "@angular/router";
import { DashboardPage } from "./dashboard.page";
import { AuthGuard } from "src/app/guard/auth-guard-guard";

export const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardPage,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                loadComponent: () => import('./home/home.page').then((m) => m.HomePage)
            },
            {
                path: 'profile',
                loadComponent: () => import('./profile/profile.page').then((m) => m.ProfilePage)
            },
            {
                path: 'settings',
                loadComponent: () => import('./settings/settings.page').then((m) => m.SettingsPage)
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];