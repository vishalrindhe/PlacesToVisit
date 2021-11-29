import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesVisitedFormPageRoutingModule } from './places-visited-form-routing.module';

import { PlacesVisitedFormPage } from './places-visited-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesVisitedFormPageRoutingModule
  ],
  declarations: [PlacesVisitedFormPage]
})
export class PlacesVisitedFormPageModule {}
