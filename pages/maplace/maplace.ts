// My Google Maps API KEY:  AIzaSyCZcLg18g_X4rCu24uDOm3qyN_9yzd1rQQ

import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-maplace',
  templateUrl: 'maplace.html',
})
export class Maplace {

  lat: number;
  lng: number;

  constructor(private viewCtrl: ViewController, 
              private navParams: NavParams) { 
    this.lat = this.navParams.data.location.latitude; // ? Undefined
    this.lng = this.navParams.data.location.longitude; // ? Undefined
  }

  //Close Page
  selfClose(){
    this.viewCtrl.dismiss();
  }

}
