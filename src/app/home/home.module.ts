import { LoginPage } from './../pages/login/login.page';
import { GlobePage } from './../pages/globe/globe.page';
import { GlobePageModule } from './../pages/globe/globe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
    // GlobePageModule
  ],
  declarations: [HomePage, LoginPage, GlobePage]
})
export class HomePageModule {}
