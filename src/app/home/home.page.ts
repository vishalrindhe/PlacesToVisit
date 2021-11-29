import { DataService } from './../../assets/services/data.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginform: FormGroup;
  constructor(
    private router: Router,
    private data: DataService,
    public toastController: ToastController
  ) {
    this.loginform = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '[^0-9]([a-zA-Z0-9+_.-])+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,4}$'
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z A-Z]).{4,8}$'),
      ]),
    });
  }

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

  submit() {
    // console.log('form data', this.loginform.value.username);
    if (
      // eslint-disable-next-line eqeqeq
      // this.loginform.value.username == 'abcd' &&
      // eslint-disable-next-line eqeqeq
      this.loginform.get('password').value == 'abc1'
    ) {
      this.router.navigate(['/home']);
    }
  }

  forgotPassword() {
    this.presentToast('This feature is not working currently!', 'warning');
  }

  goToRegistration() {
    this.router.navigate(['/registration']);
  }
}
