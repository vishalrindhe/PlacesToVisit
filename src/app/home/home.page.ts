import { DataService } from './../../assets/services/data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private data: DataService) {
  }

forgotPassword(){
  // this.router.navigateByUrl('./');
  alert('ok');
}
goToRegistration(){
  // this.router.navigateByUrl('/registration', { replaceUrl: true });
  console.log(this.data.hero);
    this.router.navigateByUrl('registration');
  // alert('okr');
  // this.router.navigateByUrl('registration');

}


}
