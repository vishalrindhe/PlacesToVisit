import { PlacesVisitedFormPage } from './../places-visited-form/places-visited-form.page';
/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-places-visited',
  templateUrl: './places-visited.page.html',
  styleUrls: ['./places-visited.page.scss'],
})
export class PlacesVisitedPage {
          place='';
          placesDescription='';
          dateOfJourney='';
          totalExpense='';
          images='';
          rating='';
          url = [];
          index;

  constructor(
    public data: DataService,
    public alertController: AlertController,
    public toastController: ToastController,
    public modalController: ModalController
  ) {}


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
            // console.log('Confirm Okay');

            this.data.userDB.forEach((element) => {
              if (element.email == this.data.userEmail) {
                element.placesVisited.splice(i, 1);
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
    console.log(':',this.place,
    ':',this.placesDescription,
    ':',this.dateOfJourney,
    ':',this.totalExpense,
    ':',this.images,
    ':',this.rating,
    ':',this.url);
    const modal = await this.modalController.create({
      component: PlacesVisitedFormPage,
      cssClass: 'my-custom-class',
      componentProps:{
          place:this.place,
          placesDescription:this.placesDescription,
          dateOfJourney:this.dateOfJourney,
          totalExpense:this.totalExpense,
          images:this.images,
          rating:this.rating,
          url: this.url,
          index:this.index
      }
    });
    return await modal.present();
  }

   empty(){
    this.place='';
    this.placesDescription='';
    this.dateOfJourney='';
    this.totalExpense='';
    this.images='';
    this.rating='';
    this.url = [];
    this.index=undefined;
  }


  update(i){
    this.place=this.data.userData.placesVisited[i].place;
    this.placesDescription=this.data.userData.placesVisited[i].placesDescription;
    this.dateOfJourney=this.data.userData.placesVisited[i].dateOfJourney;
    this.totalExpense= this.data.userData.placesVisited[i].totalExpense;
    this.images= this.data.userData.placesVisited[i].images;
    this.url= this.data.userData.placesVisited[i].images;
    this.rating= this.data.userData.placesVisited[i].rating;
    this.index = i;
    // console.log(':',this.place,
    // ':',this.placesDescription,
    // ':',this.dateOfJourney,
    // ':',this.totalExpense,
    // ':',this.images,
    // ':',this.rating,
    // ':',this.url);
    this.presentModal();
  }

}
