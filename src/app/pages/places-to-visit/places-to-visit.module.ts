import { PlacesToVisitFormPage } from './../places-to-visit-form/places-to-visit-form.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesToVisitPageRoutingModule } from './places-to-visit-routing.module';

import { PlacesToVisitPage } from './places-to-visit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesToVisitPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PlacesToVisitPage,PlacesToVisitFormPage]
})
export class PlacesToVisitPageModule {}
