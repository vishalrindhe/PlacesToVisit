import { GallaryPage } from './../gallary/gallary.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-gallary',
  templateUrl: './grid-gallary.page.html',
  styleUrls: ['./grid-gallary.page.scss'],
})
export class GridGallaryPage implements OnInit {

  images=[];
  imageIndex=0;
  constructor(public data: DataService,private modalController: ModalController,private router: Router) { }

  ngOnInit() {
    this.data.userDB.forEach(element => {
      element.placesVisited.forEach(innerElement => {
        // console.log('innerElement:',innerElement);
        if(innerElement.images != undefined ){
        innerElement.images.forEach(innerInnerElement => {
          this.images.push(innerInnerElement);
        });
      }
      });
    });

    console.log(this.images);
  }

  async presentModal(i) {
    const modal = await this.modalController.create({
      component: GallaryPage,
      cssClass: 'my-custom-class',
      componentProps: {
        imageIndex: i
      }
    });
    return await modal.present();
  }

  modalDismiss() {
    // this.modalController.dismiss();
    this.router.navigateByUrl('/dashboard');
  }

}
