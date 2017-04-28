import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { PlacesService } from './../../services/places.service';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-new-places',
  templateUrl: 'new-places.html',
})
export class NewPlaces {

  location: { lat: number, lng: number} = { lat: 0, lng: 0}; // initial values of location value that have to pass

  constructor(private placesService: PlacesService, 
              private navCtrl: NavController, 
              private geolocation: Geolocation) { }

  onAddPlace(value: {title: string}){
    this.placesService.AddPlace({title: value.title, location: this.location });
    this.navCtrl.pop();
  }

  onLocateUser(){
    this.geolocation.getCurrentPosition()
      .then(
        (location) => {
          console.log('Location fetched successfully');
          this.location.lat = location.coords.latitude;
          this.location.lng = location.coords.longitude;
    }).catch((error) => {
          console.log('Error getting location', error);
    });

    }
}
