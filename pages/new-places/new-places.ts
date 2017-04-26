import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { PlacesService } from './../../services/places.service';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-new-places',
  templateUrl: 'new-places.html',
})
export class NewPlaces {

  location: any;

  constructor(private placesService: PlacesService, 
              private navCtrl: NavController, 
              private geolocation: Geolocation) { }

  onAddPlace(value: {title: string}){
    this.placesService.AddPlace(value);
    this.navCtrl.pop();
  }

  onLocateUser(){
    this.geolocation.getCurrentPosition()
      .then((location) => {
        console.log('Location fetched successfully') 
        this.location = location;
    }).catch((error) => {
          console.log('Error getting location', error);
    });
    }
}
