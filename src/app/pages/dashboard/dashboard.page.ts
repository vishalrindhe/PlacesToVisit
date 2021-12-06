import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userName: string;
  constructor(public data: DataService, private router: Router,private menu: MenuController) {
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

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
