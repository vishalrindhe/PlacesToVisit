/* eslint-disable eqeqeq */
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  hero = 0;
  loggedIn = false;
  userName = '';
  userEmail = '';
  userData;
  userDB;

  constructor() {
    // console.log(this.userData);
    // console.log(this.userDB);
  }
  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnInit(){
    this.userDB = JSON.parse(localStorage.getItem('userData'));
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.userDB.forEach(element => {
      if(element.email == this.userEmail){
        this.userData = element;
      }
    });
  }
}
