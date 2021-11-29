import { DataService } from './../../../assets/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
  }
forgotPassword(){
  // this.router.navigateByUrl('./');
  alert('ok');
}
goToRegistration(){
  // this.router.navigateByUrl('/registration', { replaceUrl: true });
  this.data.hero= this.data.hero + 1;
  console.log(this.data.hero);
  this.router.navigateByUrl('registration');
  // alert('okr');
}
}
