/* eslint-disable @typescript-eslint/no-shadow */
// import { element } from 'protractor';
/* eslint-disable eqeqeq */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-places-visited-form',
  templateUrl: './places-visited-form.page.html',
  styleUrls: ['./places-visited-form.page.scss'],
})
export class PlacesVisitedFormPage implements OnInit {
  @Input() place;
  @Input() placesDescription;
  @Input() dateOfJourney;
  @Input() totalExpense;
  @Input() images;
  @Input() rating;
  @Input() url: any;
  @Input() index;
  placesVisited: FormGroup;
  // url =  [];
  selectedImage = [];
  rate=[0];
  imgData=[];

    constructor(
    private router: Router,
    public toastController: ToastController,
    private data: DataService,
    public modalController: ModalController,
    private fileChooser: FileChooser,
    public loadingController: LoadingController
  ) {
      this.presentLoadingWithOptions();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      duration: 1000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

  ngOnInit() {

    this.placesVisited = new FormGroup({
      place: new FormControl(this.place, [
        Validators.required,
        Validators.pattern('[a-zA-Z]{2,12}$'),
      ]),
      placesDescription: new FormControl(this.placesDescription, [
        Validators.required,
        // Validators.pattern('[a-zA-Z]{2,12}$'),
      ]),
      dateOfJourney: new FormControl(this.dateOfJourney, [Validators.required]),
      totalExpense: new FormControl(this.totalExpense, [Validators.required]),
      images: new FormControl(this.images, [Validators.required]),
      // video: new FormControl(),
      rating: new FormControl(this.rating,[Validators.required]),
    });

    console.log(':',this.index);

  }
  addImageButtonClick(fileLoader){
    // this.userInputViewChild.nativeElement.click();
    fileLoader.click();
  //     let that = this;
  //     fileLoader.onchange = (()=> {
  //       var file = fileLoader.files[0];
  //       var reader = new FileReader();
  // })
}

  submit() {
    const data = {
      place: this.placesVisited.value.place,
      dateOfJourney: this.placesVisited.value.dateOfJourney,
      totalExpense: this.placesVisited.value.totalExpense,
      placesDescription: this.placesVisited.value.placesDescription,
      images: this.url,
      rating: this.placesVisited.value.rating,
    };

    const usersData = JSON.parse(localStorage.getItem('userData'));
    console.log(usersData);

    // eslint-disable-next-line @typescript-eslint/no-shadow
    usersData.forEach((element) => {
      if (element.email === this.data.userEmail) {
        if(this.index != undefined){
          element.placesVisited[this.index] = data;
        } else{
          element.placesVisited.push(data);
        }
      }
    });
  

    localStorage.setItem('userData', JSON.stringify(usersData));
    this.data.userDB = JSON.parse(localStorage.getItem('userData'));
    this.data.userDB.forEach((element) => {
      if (element.email == this.data.userEmail) {
        this.data.userData = element;
      }
    });
    this.modalDismiss();
  }
  modalDismiss() {
    this.modalController.dismiss();
  }

  fileChoose(){
    this.fileChooser.open()
  .then(uri => console.log(uri))
  .catch(e => console.log(e));
  }

  imageData(event){
    console.log(event.target.files);
    // this.selectedImage = event.target.files[0];
    // let reader = new FileReader();

    // reader.onload = (e: any) => {
    //   this.url = e.target.result;
    // };
    // reader.readAsDataURL(this.selectedImage);


    [...event.target.files].forEach((element,index) => {
      console.log(index);
      console.log(element);


      this.selectedImage[index] = event.target.files[index];
      // imgData = getBase64Image(bannerImage);
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.url[index] = e.target.result;
      // this.imgData[index] = this.getBase64Image(e.target.result);
    };
    reader.readAsDataURL(this.selectedImage[index]);

    });
  }

  deleteImage(i){
    this.url.splice(i,1);
    console.log(document.getElementsByName('imageInput'));
    // console.log(this.placesVisited.value(""));
  }


  onRatingChange(rating){
    console.log('changed rating: ',rating);
    // do your stuff
}

  getDate(e) {
    const date = new Date(e.target.value);
    const today = new Date();

    if(date >= today){
      this.placesVisited.controls.dob.setErrors({dateExceed: 'text of the error'});
    }
  }


//   getBase64Image(img) {
//     const canvas = document.createElement('canvas');
//     canvas.width = img.width;
//     canvas.height = img.height;

//     const ctx = canvas.getContext('2d');
//     ctx.drawImage(img, 0, 0);

//     const dataURL = canvas.toDataURL('image/png');

//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
// }]



}

