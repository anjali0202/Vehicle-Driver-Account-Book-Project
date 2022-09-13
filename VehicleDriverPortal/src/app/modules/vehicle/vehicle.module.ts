import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { GetAllVehiclesComponent } from './components/get-all-vehicles/get-all-vehicles.component';
import { GetVehiclesByTypeComponent } from './components/get-vehicles-by-type/get-vehicles-by-type.component';
import { GetVehiclesByRegistrationNumberComponent } from './components/get-vehicles-by-registration-number/get-vehicles-by-registration-number.component';
import { DeleteVehicleComponent } from './components/delete-vehicle/delete-vehicle.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddVehicleComponent,
    GetAllVehiclesComponent,
    GetVehiclesByTypeComponent,
    GetVehiclesByRegistrationNumberComponent,
    DeleteVehicleComponent,
    UpdateVehicleComponent,
    VehicleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'vehicle/add-vehicle', component: AddVehicleComponent},
      {path: 'vehicle/delete-vehicle', component: DeleteVehicleComponent},
      {path: 'vehicle/get-all-vehicles', component: GetAllVehiclesComponent},
      {path: 'vehicle/get-vehicles-by-registration-number', component: GetVehiclesByRegistrationNumberComponent},
      {path: 'vehicle/get-vehicles-by-type', component: GetVehiclesByTypeComponent},
      {path: 'vehicle/update-vehicle', component: UpdateVehicleComponent},
      {path:"vehicle/vehicle",component: VehicleComponent}
    ]),
  ]
})
export class VehicleModule { }
