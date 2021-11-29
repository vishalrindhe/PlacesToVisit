import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesVisitedFormPage } from './places-visited-form.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesVisitedFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesVisitedFormPageRoutingModule {}
