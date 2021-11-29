import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardPage
  // }

  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'places-to-visit',
        children: [
          {
            path: '',
            loadChildren: () => import('./../places-to-visit/places-to-visit.module').then( m => m.PlacesToVisitPageModule)
          }
        ]
      },
      {
        path: 'places-visited',
        children: [
          {
            path: '',
            loadChildren: () => import('./../places-visited/places-visited.module').then( m => m.PlacesVisitedPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/dashboard/places-to-visit',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
