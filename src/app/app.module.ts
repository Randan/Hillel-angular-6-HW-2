import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CHotelListComponent } from './c-hotel-list/c-hotel-list.component';
import { CHotelWeatherComponent } from './c-hotel-weather/c-hotel-weather.component';
import { CHotelFollowersComponent } from './c-hotel-followers/c-hotel-followers.component';
import { CHotelCopyrightComponent } from './c-hotel-copyright/c-hotel-copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    CHotelListComponent,
    CHotelWeatherComponent,
    CHotelFollowersComponent,
    CHotelCopyrightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
