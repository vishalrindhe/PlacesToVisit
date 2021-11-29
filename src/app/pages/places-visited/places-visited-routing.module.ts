import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesVisitedPage } from './places-visited.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesVisitedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesVisitedPageRoutingModule {}
