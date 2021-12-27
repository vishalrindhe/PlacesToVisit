import { ModalController } from '@ionic/angular';
import { element } from 'protractor';
import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.page.html',
  styleUrls: ['./gallary.page.scss'],
})
export class GallaryPage implements OnInit {

  @Input() imageIndex;
  images=[];
  sliderOpts;
  constructor(public data: DataService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.data.userDB.forEach(element => {
      element.placesVisited.forEach(innerElement => {
        console.log('innerElement:',innerElement);
        innerElement.images.forEach(innerInnerElement => {
          this.images.push(innerInnerElement);
        });
      });
    });

    console.log(this.images);
    this.sliderOpts ={
      initialSlide: this.imageIndex,
      speed: 400,
      zoom:{
        maxRatio:2
      }
    };

    this.sliderOpts.initialSlide = this.imageIndex;
  }


  modalDismiss() {
    this.modalController.dismiss();
  }
}
