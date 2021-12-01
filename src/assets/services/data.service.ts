/* eslint-disable eqeqeq */
import { element } from 'protractor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  hero = 0;
  loggedIn = false;
  userName = '';
  userEmail = '';
  userData;
  userDB;

  constructor() {
    this.userDB = JSON.parse(localStorage.getItem('userData'));
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.userDB.forEach(element => {
      if(element.email == this.userEmail){
        this.userData = element;
      }
    });
    console.log(this.userData);
    console.log(this.userDB);
  }
}
