import { DataService } from './../../../assets/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userName: string;
  constructor(public data: DataService, private router: Router) {
    this.userName = this.data.userName;
   }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userLoggedInName');
    this.data.userName = '';
    this.data.loggedIn = false;
    this.router.navigateByUrl('home');
  }
}
