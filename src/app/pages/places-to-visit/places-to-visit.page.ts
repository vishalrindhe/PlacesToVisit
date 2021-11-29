import { element } from 'protractor';
import { DataService } from 'src/assets/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-to-visit',
  templateUrl: './places-to-visit.page.html',
  styleUrls: ['./places-to-visit.page.scss'],
})
export class PlacesToVisitPage implements OnInit {

  constructor(public data: DataService) {
  }

  ngOnInit() {
  }

  delete(i){
    // this.data.userData.placesToVisit.splice(i,1);
    this.data.userDB.forEach(element => {
      if(element.email == this.data.userEmail){
        element.placesToVisit.splice(i,1);
        localStorage.setItem('userData',JSON.stringify(this.data.userDB));
      }
    });
    // localStorage.setItem
    // localStorage.setItem('userData',JSON.stringify(usersData));
    this.data.userDB = JSON.parse(localStorage.getItem('userData'));
    this.data.userDB.forEach(element => {
      if(element.email == this.data.userEmail){
        this.data.userData = element
      }
    });
    
  }
}
