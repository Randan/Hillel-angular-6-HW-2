import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-hotel-list',
  templateUrl: './c-hotel-list.component.html',
  styleUrls: ['./c-hotel-list.component.css']
})
export class CHotelListComponent {

  @Input()
  public hotels: Hotel[];

  @Input()
  public currentHotel: Hotel;

  @Output()
  public hotel: EventEmitter<Hotel> = new EventEmitter();

  public selectHotel = (hotel: Hotel): void => {
    this.hotel.emit(hotel);
  }

}
