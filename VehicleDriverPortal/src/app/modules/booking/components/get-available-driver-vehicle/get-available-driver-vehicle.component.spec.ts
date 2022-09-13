import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAvailableDriverVehicleComponent } from './get-available-driver-vehicle.component';

describe('GetAvailableDriverVehicleComponent', () => {
  let component: GetAvailableDriverVehicleComponent;
  let fixture: ComponentFixture<GetAvailableDriverVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAvailableDriverVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAvailableDriverVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
