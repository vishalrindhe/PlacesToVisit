import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../assets/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'globe',
    loadChildren: () => import('./pages/globe/globe.module').then( m => m.GlobePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'places-visited-form',
    loadChildren: () => import('./pages/places-visited-form/places-visited-form.module').then( m => m.PlacesVisitedFormPageModule)
  },
  {
    path: 'places-to-visit-form',
    loadChildren: () => import('./pages/places-to-visit-form/places-to-visit-form.module').then( m => m.PlacesToVisitFormPageModule)
  }
  // {
  //   path: 'places-to-visit',
  //   loadChildren: () => import('./pages/places-to-visit/places-to-visit.module').then( m => m.PlacesToVisitPageModule)
  // },
  // {
  //   path: 'places-visited',
  //   loadChildren: () => import('./pages/places-visited/places-visited.module').then( m => m.PlacesVisitedPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
