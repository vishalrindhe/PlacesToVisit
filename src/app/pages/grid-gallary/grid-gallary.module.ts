import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridGallaryPageRoutingModule } from './grid-gallary-routing.module';

import { GridGallaryPage } from './grid-gallary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridGallaryPageRoutingModule
  ],
  declarations: [GridGallaryPage]
})
export class GridGallaryPageModule {}
