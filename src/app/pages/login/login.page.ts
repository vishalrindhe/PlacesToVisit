import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loggedIn = false;
  loginform: FormGroup;
  constructor(
    private router: Router,
    public toastController: ToastController,
    private data: DataService
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
    let passwordNotMatch = false;
    // eslint-disable-next-line eqeqeq
    const data: any = JSON.parse(localStorage.getItem('userData') || '[]');
    data.forEach((element) => {
      if (element.email === this.loginform.value.email) {
        if (element.password === this.loginform.value.password) {
          const userName = element.firstName;
          this.presentToast('Login Successful', 'success');
          this.router.navigate(['/dashboard']);
          this.loggedIn = true;
          this.data.loggedIn = true;
          localStorage.setItem('userLoggedInName', element.firstName);
          localStorage.setItem('userLoggedIn', element.email);
          this.data.userName = localStorage.getItem('userLoggedInName');
          this.data.userEmail = localStorage.getItem('userLoggedIn');
          this.data.loggedIn = true;
          this.data.userDB = JSON.parse(localStorage.getItem('userData'));
          // eslint-disable-next-line @typescript-eslint/no-shadow
          this.data.userDB.forEach((element) => {
            if (element.email === this.data.userEmail) {
              this.data.userData = element;
            }
          });
        } else {
          passwordNotMatch = true;
          // this.presentToast('Password is incorrect','warning');
        }
      }
    });
    if (passwordNotMatch) {
      this.presentToast('Password is incorrect', 'warning');
    } else if (!this.loggedIn) {
      this.presentToast('User does not exist', 'danger');
    }
  }

  forgotPassword() {
    this.presentToast('This feature is not working currently!', 'warning');
  }

  goToRegistration() {
    this.router.navigate(['/registration']);
  }
}
