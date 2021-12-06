import { DataService } from '../services/data.service';
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
  constructor(
    private router: Router,
    private data: DataService,
    public toastController: ToastController
  ) {
    if (
      localStorage.getItem('userLoggedIn') != null ||

      localStorage.getItem('userLoggedIn') !== undefined ||
      localStorage.getItem('userLoggedIn') !== ''
    ) {
      this.data.loggedIn = true;
    }
  }
}
