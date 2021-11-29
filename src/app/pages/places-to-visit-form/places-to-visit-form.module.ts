import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesToVisitFormPageRoutingModule } from './places-to-visit-form-routing.module';

import { PlacesToVisitFormPage } from './places-to-visit-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesToVisitFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PlacesToVisitFormPage]
})
export class PlacesToVisitFormPageModule {}
