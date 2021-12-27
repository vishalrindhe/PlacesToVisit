import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridGallaryPage } from './grid-gallary.page';

const routes: Routes = [
  {
    path: '',
    component: GridGallaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridGallaryPageRoutingModule {}
