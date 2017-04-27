// Permanent Data Storage injected to this Service
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Place } from '../model/place.model';

@Injectable()
export class PlacesService {

    private places: Place[] = [];

    constructor ( private storage: Storage ) { }

    AddPlace(place: Place) {
        this.places.push(place);
        this.storage.set('places', this.places);
    }

    getPlaces() {
        return this.storage.get('places')
            .then(
                (places) => {
                    this.places = places == null ? []: places;
                    return this.places.slice();
                }
            );
    }

    ErasePlaces(){
        this.storage.clear();
        this.places = [];
    }
}
