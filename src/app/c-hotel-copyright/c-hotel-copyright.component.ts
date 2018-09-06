import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-hotel-copyright',
  templateUrl: './c-hotel-copyright.component.html',
  styleUrls: ['./c-hotel-copyright.component.css']
})
export class CHotelCopyrightComponent {

  public copyrightString = '© 2015 Hot Weather Widget. All rights reserved | Design by';
  public copyrightLink = 'W3layouts';
  public copyrightHref = 'http://w3layouts.com/';

}
