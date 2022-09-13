import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookingByDateTimeComponent } from './get-booking-by-date-time.component';

describe('GetBookingByDateTimeComponent', () => {
  let component: GetBookingByDateTimeComponent;
  let fixture: ComponentFixture<GetBookingByDateTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBookingByDateTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBookingByDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
