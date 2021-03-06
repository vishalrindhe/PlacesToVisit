import { PlacesToVisitFormPage } from './../places-to-visit-form/places-to-visit-form.page';
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable eqeqeq */
import { element } from 'protractor';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-places-to-visit',
  templateUrl: './places-to-visit.page.html',
  styleUrls: ['./places-to-visit.page.scss'],
})
export class PlacesToVisitPage implements OnInit {
  constructor(
    public data: DataService,
    public alertController: AlertController,
    public toastController: ToastController,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      // eslint-disable-next-line object-shorthand
      message: message,
      position: 'top',
      // eslint-disable-next-line object-shorthand
      color: color,
      duration: 2000,
      buttons: [
        {
          text: 'X',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    toast.present();
  }

  delete(i) {
    // this.data.userData.placesToVisit.splice(i,1);
    this.presentAlertConfirm(i);
    // this.data.userDB.forEach(element => {
    //   if(element.email == this.data.userEmail){
    //     element.placesToVisit.splice(i,1);
    //     localStorage.setItem('userData',JSON.stringify(this.data.userDB));
    //   }
    // });
    // this.data.userDB = JSON.parse(localStorage.getItem('userData'));
    // this.data.userDB.forEach(element => {
    //   if(element.email == this.data.userEmail){
    //     this.data.userData = element
    //   }
    // });
  }

  async presentAlertConfirm(i) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'You want to delete?',
      // message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'changeColor',
          handler: (blah) => {
            console.log('Confirm Cancel: blah', blah);
          },
        },
        {
          text: 'Okay',
          cssClass: 'dark',
          handler: () => {
            console.log('Confirm Okay');

            this.data.userDB.forEach((element) => {
              if (element.email == this.data.userEmail) {
                element.placesToVisit.splice(i, 1);
                localStorage.setItem(
                  'userData',
                  JSON.stringify(this.data.userDB)
                );
              }
            });
            this.data.userDB = JSON.parse(localStorage.getItem('userData'));
            this.data.userDB.forEach((element) => {
              if (element.email == this.data.userEmail) {
                this.data.userData = element;
              }
            });
            this.presentToast('Record Deleted','success');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PlacesToVisitFormPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
