import { Component } from '@angular/core';
import { Maplace } from './../maplace/maplace';

import { NavController, ModalController } from 'ionic-angular';
import { NewPlaces } from '../new-places/new-places';
import { PlacesService } from './../../services/places.service';
import { Place } from './../../model/place.model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: Place[] = [];

  constructor(public navCtrl: NavController, 
              private placesService: PlacesService,
              private modalCtrl: ModalController) {  }

  // Executed whenever this page enters
  ionViewWillEnter(){ 
    this.placesService.getPlaces()
      .then(
        (places) => this.places = places
      );
  }
  // Load
  onLoadNewPlace(){
    this.navCtrl.push(NewPlaces); // Push new page
  }
  // Erase
  Erase(){
    this.placesService.ErasePlaces(); // Erase DB
    this.places = []; // Erase List
  }

  //OpenPlace
  onOpenPlace(place: Place){
    this.modalCtrl.create(Maplace, place).present();
  }
}
