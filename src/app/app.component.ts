/* eslint-disable eqeqeq */
import { DataService } from './services/data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private data: DataService, private router: Router) {
    if (localStorage.getItem('userLoggedIn') == null ||
      localStorage.getItem('userLoggedIn') == undefined ||
      localStorage.getItem('userLoggedIn') == '') {
      this.data.loggedIn = false;
    } else{
      this.router.navigateByUrl('dashboard');
      this.data.userName = localStorage.getItem('userLoggedInName');
      this.data.userEmail = localStorage.getItem('userLoggedIn');
      this.data.loggedIn = true;
      this.data.userDB = JSON.parse(localStorage.getItem('userData'));
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.data.userDB.forEach(element => {
      if(element.email === this.data.userEmail){
        this.data.userData = element;
      }
    });
    }
  }
}
