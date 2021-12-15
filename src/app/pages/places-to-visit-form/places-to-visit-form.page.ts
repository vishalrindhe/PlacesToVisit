/* eslint-disable eqeqeq */
import { element } from 'protractor';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-places-to-visit-form',
  templateUrl: './places-to-visit-form.page.html',
  styleUrls: ['./places-to-visit-form.page.scss'],
})
export class PlacesToVisitFormPage {
  placesToVisit: FormGroup;
  rate;
  constructor(
    private router: Router,
    public toastController: ToastController,
    private data: DataService,
    public modalController: ModalController
  ) {
    this.placesToVisit = new FormGroup({
      place: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{2,12}$'),
      ]),
      preference: new FormControl('', [Validators.required]),
      estimatedCost: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    const data = {
      place: this.placesToVisit.value.place,
      preference: this.placesToVisit.value.preference,
      estimatedCost: this.placesToVisit.value.estimatedCost,
    };

    const usersData = JSON.parse(localStorage.getItem('userData'));
    console.log(usersData);

    // eslint-disable-next-line @typescript-eslint/no-shadow
    usersData.forEach((element) => {
      if (element.email === this.data.userEmail) {
        element.placesToVisit.push(data);
      }
    });

    localStorage.setItem('userData', JSON.stringify(usersData));
    this.data.userDB = JSON.parse(localStorage.getItem('userData'));
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.data.userDB.forEach((element) => {
      if (element.email == this.data.userEmail) {
        this.data.userData = element;
      }
    });
    this.modalDismiss();
  }

  modalDismiss(){
    this.modalController.dismiss();
  }
}
