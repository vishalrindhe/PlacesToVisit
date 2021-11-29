import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesToVisitPage } from './places-to-visit.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesToVisitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesToVisitPageRoutingModule {}
