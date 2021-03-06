import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c-hotel-followers',
  templateUrl: './c-hotel-followers.component.html',
  styleUrls: ['./c-hotel-followers.component.css']
})
export class CHotelFollowersComponent {

  @Input()
  public profile: Profile;
}
