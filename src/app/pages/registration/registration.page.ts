import { DataService } from '../../services/data.service';
import { Component, Inject, NgZone, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
// implements OnInit
export class RegistrationPage {
  registrationform: FormGroup;
  constructor(private router: Router, public toastController: ToastController) {
    this.registrationform = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{4,8}$'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{4,8}$'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^0-9]([a-zA-Z0-9+_.-])+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z A-Z]).{4,8}$'),
      ]),
      dob: new FormControl('', [
        Validators.required
      ])
    });
  }

  async presentToast(message,color) {
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
          }
        }
      ]
    });
    toast.present();
  }

  getDate(e) {
    const date = new Date(e.target.value);
    const today = new Date();

    if(date >= today){
      this.registrationform.controls.dob.setErrors({dateExceed: 'text of the error'});
    }
  }


  register(){
    const userData = {
      firstName:this.registrationform.value.firstName,
      lastName:this.registrationform.value.lastName,
      email:this.registrationform.value.email,
      password:this.registrationform.value.password,
      dob:this.registrationform.value.dob,
      placesToVisit : [],
      placesVisited : []
    };

    // console.log(localStorage.getItem('userData'));
    if(localStorage.getItem('userData') == null || localStorage.getItem('userData').length === 0 ){
      const a = [];
      a.push(userData);
      localStorage.setItem('userData',JSON.stringify(a));
      this.presentToast('Registered Successfully','success');
        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 2000);
    } else{
      let emailPresent = false;
      const data  = JSON.parse(localStorage.getItem('userData'));
      console.log('data found:',data);
      data.forEach(element => {
        if(element.email === userData.email){
          // alert('email present');
          this.presentToast('Email already registered','danger');
          emailPresent = true;
        }
      });

      if(!emailPresent){
        data.push(userData);
        localStorage.setItem('userData',JSON.stringify(data));
        this.presentToast('Registered Successfully','success');
        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 2000);
      }

    }
  }


  goToLogin(){
  this.router.navigateByUrl('/home');
  }
}
