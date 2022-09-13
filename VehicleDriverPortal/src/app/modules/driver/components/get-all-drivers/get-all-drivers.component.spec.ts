import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDriversComponent } from './get-all-drivers.component';

describe('GetAllDriversComponent', () => {
  let component: GetAllDriversComponent;
  let fixture: ComponentFixture<GetAllDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
