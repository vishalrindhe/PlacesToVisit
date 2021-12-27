/* eslint-disable eqeqeq */
import { DataService } from './services/data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public data: DataService, private router: Router,private menu: MenuController) {
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

  logOut(){
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userLoggedInName');
    this.data.userName = '';
    this.data.loggedIn = false;
    this.router.navigateByUrl('home');
    // this.menu.close('content1');
    this.menu.toggle();
  }

  gallary(){
    this.router.navigateByUrl('grid-gallary');
    this.menu.toggle();
  }
}


