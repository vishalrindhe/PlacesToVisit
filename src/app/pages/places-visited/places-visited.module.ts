import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesVisitedPageRoutingModule } from './places-visited-routing.module';

import { PlacesVisitedPage } from './places-visited.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesVisitedPageRoutingModule
  ],
  declarations: [PlacesVisitedPage]
})
export class PlacesVisitedPageModule {}
