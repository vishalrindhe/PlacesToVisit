import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesToVisitFormPage } from './places-to-visit-form.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesToVisitFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesToVisitFormPageRoutingModule {}
