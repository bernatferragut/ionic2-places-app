// My Google Maps API KEY:  AIzaSyCZcLg18g_X4rCu24uDOm3qyN_9yzd1rQQ

import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Place } from './../../model/place.model';

@Component({
  selector: 'page-maplace',
  templateUrl: 'maplace.html',
})
export class Maplace {

  latIni: Place;
  lngIni: Place;

  lat: number;
  lng: number;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) { 
    this.latIni = this.navParams.data;
    this.lat = this.latIni.location.lat
    console.log(this.lat);
    
    this.lngIni = this.navParams.data;
    this.lng = this.lngIni.location.lng;
    console.log(this.lng);
  }

  //Close Page
  selfClose(){
    this.viewCtrl.dismiss();
  }

}
