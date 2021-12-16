import { element } from 'protractor';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.page.html',
  styleUrls: ['./gallary.page.scss'],
})
export class GallaryPage implements OnInit {

  images=[];
  sliderOpts ={
    zoom:{
      maxRatio:2
    }
  }
  constructor(public data: DataService) { }

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
  }



}
