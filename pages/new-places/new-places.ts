import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { PlacesService } from './../../services/places.service';

@Component({
  selector: 'page-new-places',
  templateUrl: 'new-places.html',
})
export class NewPlaces {

  constructor( private placesService: PlacesService, private navCtrl: NavController) { }

  onAddPlace(value: {title: string}){
    this.placesService.AddPlace(value);
    this.navCtrl.pop();
  }
}
