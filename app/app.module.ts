import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPlaces } from './../pages/new-places/new-places';
import { PlacesService } from './../services/places.service';
import { Geolocation } from '@ionic-native/geolocation';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlaces
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlaces
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService,
    Geolocation
  ]
})
export class AppModule {}
