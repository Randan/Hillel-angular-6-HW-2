import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHotelListComponent } from './c-hotel-list.component';

describe('CHotelListComponent', () => {
  let component: CHotelListComponent;
  let fixture: ComponentFixture<CHotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHotelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
