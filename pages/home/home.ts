import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewPlaces } from './../new-places/new-places';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {  }

  onLoadNewPlace(){
    this.navCtrl.push(NewPlaces);
  }
}
