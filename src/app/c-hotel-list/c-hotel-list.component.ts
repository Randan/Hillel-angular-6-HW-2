import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-hotel-list',
  templateUrl: './c-hotel-list.component.html',
  styleUrls: ['./c-hotel-list.component.css']
})
export class CHotelListComponent implements OnInit {

  @Input()
  public hotels: Hotel[];

  public ngOnInit(): void {
    console.log(this.hotels);
  }
}
