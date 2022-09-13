import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllVehiclesComponent } from './get-all-vehicles.component';

describe('GetAllVehiclesComponent', () => {
  let component: GetAllVehiclesComponent;
  let fixture: ComponentFixture<GetAllVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
