import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVehiclesByRegistrationNumberComponent } from './get-vehicles-by-registration-number.component';

describe('GetVehiclesByRegistrationNumberComponent', () => {
  let component: GetVehiclesByRegistrationNumberComponent;
  let fixture: ComponentFixture<GetVehiclesByRegistrationNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetVehiclesByRegistrationNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetVehiclesByRegistrationNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
