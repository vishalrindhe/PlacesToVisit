/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-places-visited-form',
  templateUrl: './places-visited-form.page.html',
  styleUrls: ['./places-visited-form.page.scss'],
})
export class PlacesVisitedFormPage{
  placesToVisit: FormGroup;
  constructor(private router: Router, public toastController: ToastController, private data: DataService) {
    this.placesToVisit = new FormGroup({
      place: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{2,12}$'),
      ]),
      dateOfJourney: new FormControl('', [
        Validators.required
      ]),
      estimatedCost: new FormControl('', [
        Validators.required,
      ])
    });
  }


  submit(){
    const data = {
      place : this.placesToVisit.value.place,
      dateOfJourney : this.placesToVisit.value.dateOfJourney,
      estimatedCost : this.placesToVisit.value.estimatedCost,
    };

    const usersData = JSON.parse(localStorage.getItem('userData'));
    console.log(usersData);

    // eslint-disable-next-line @typescript-eslint/no-shadow
    usersData.forEach(element => {
      if(element.email === this.data.userEmail){
        element.placesVisited.push(data);
      }
    });

    localStorage.setItem('userData',JSON.stringify(usersData));
    this.data.userDB = JSON.parse(localStorage.getItem('userData'));
    this.data.userDB.forEach(element => {
      if(element.email == this.data.userEmail){
        this.data.userData = element;
      }
    });

  }



}
