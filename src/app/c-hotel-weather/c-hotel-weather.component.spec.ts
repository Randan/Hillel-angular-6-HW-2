import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHotelWeatherComponent } from './c-hotel-weather.component';

describe('CHotelWeatherComponent', () => {
  let component: CHotelWeatherComponent;
  let fixture: ComponentFixture<CHotelWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHotelWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHotelWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
