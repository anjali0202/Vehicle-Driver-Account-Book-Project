import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver/driver.component';
import { GetAllDriversComponent } from './components/get-all-drivers/get-all-drivers.component';
import { AddDriverComponent } from './components/add-driver/add-driver.component';
import { GetDriversByVehicleTypeComponent } from './components/get-drivers-by-vehicle-type/get-drivers-by-vehicle-type.component';
import { DeleteDriverComponent } from './components/delete-driver/delete-driver.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DriverComponent,
    GetAllDriversComponent,
    AddDriverComponent,
    GetDriversByVehicleTypeComponent,
    DeleteDriverComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        {path: "driver/driver", component:DriverComponent},
        {path: 'driver/add-driver', component: AddDriverComponent},
        {path: 'driver/delete-driver', component: DeleteDriverComponent},
        {path: 'driver/get-all-drivers', component: GetAllDriversComponent},
        {path: 'driver/get-drivers-by-vehicle-type', component: GetDriversByVehicleTypeComponent},
      ]
    )
  ]
})
export class DriverModule { }
