import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDriversByVehicleTypeComponent } from './get-drivers-by-vehicle-type.component';

describe('GetDriversByVehicleTypeComponent', () => {
  let component: GetDriversByVehicleTypeComponent;
  let fixture: ComponentFixture<GetDriversByVehicleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDriversByVehicleTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDriversByVehicleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
