import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewPlaces } from '../new-places/new-places';
import { PlacesService } from './../../services/places.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: { title: string}[] = [];

  constructor(public navCtrl: NavController, private placesService: PlacesService) {  }

  // Executed whenever this page enters
  ionViewWillEnter(){ 
    this.placesService.getPlaces()
      .then(
        (places) => this.places = places
      );
  }
  // Load
  onLoadNewPlace(){
    this.navCtrl.push(NewPlaces);
  }
  // Erase
  Erase(){
    this.placesService.ErasePlaces();
  }
}
