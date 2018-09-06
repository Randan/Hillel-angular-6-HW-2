import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHotelCopyrightComponent } from './c-hotel-copyright.component';

describe('CHotelCopyrightComponent', () => {
  let component: CHotelCopyrightComponent;
  let fixture: ComponentFixture<CHotelCopyrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHotelCopyrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHotelCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
