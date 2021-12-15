import { PlacesVisitedFormPage } from './../places-visited-form/places-visited-form.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesVisitedPageRoutingModule } from './places-visited-routing.module';

import { PlacesVisitedPage } from './places-visited.page';
import { IonicRatingComponentModule } from 'ionic-rating-component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesVisitedPageRoutingModule,
    ReactiveFormsModule,
    IonicRatingComponentModule
  ],
  declarations: [PlacesVisitedPage,PlacesVisitedFormPage]
})
export class PlacesVisitedPageModule {}
