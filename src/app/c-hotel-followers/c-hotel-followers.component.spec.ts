import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHotelFollowersComponent } from './c-hotel-followers.component';

describe('CHotelFollowersComponent', () => {
  let component: CHotelFollowersComponent;
  let fixture: ComponentFixture<CHotelFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHotelFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHotelFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
