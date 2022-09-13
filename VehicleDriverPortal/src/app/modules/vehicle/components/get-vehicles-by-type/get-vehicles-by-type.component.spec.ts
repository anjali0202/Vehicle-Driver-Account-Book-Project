import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVehiclesByTypeComponent } from './get-vehicles-by-type.component';

describe('GetVehiclesByTypeComponent', () => {
  let component: GetVehiclesByTypeComponent;
  let fixture: ComponentFixture<GetVehiclesByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetVehiclesByTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetVehiclesByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
