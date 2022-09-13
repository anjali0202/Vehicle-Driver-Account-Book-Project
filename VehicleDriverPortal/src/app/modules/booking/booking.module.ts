import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { GetBookingByIdComponent } from './components/get-booking-by-id/get-booking-by-id.component';
import { GetBookingByDateTimeComponent } from './components/get-booking-by-date-time/get-booking-by-date-time.component';
import { GetAvailableDriverVehicleComponent } from './components/get-available-driver-vehicle/get-available-driver-vehicle.component';
import { GetAllBookingsComponent } from './components/get-all-bookings/get-all-bookings.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookingComponent,
    AddBookingComponent,
    GetBookingByIdComponent,
    GetBookingByDateTimeComponent,
    GetAvailableDriverVehicleComponent,
    GetAllBookingsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'booking/add-booking', component: AddBookingComponent},
      {path: 'booking/get-all-bookings', component: GetAllBookingsComponent},
      {path: 'booking/get-available-driver-vehicle', component:GetAvailableDriverVehicleComponent},
      {path: 'booking/get-booking-by-id', component:GetBookingByIdComponent},
      {path: 'booking/get-booking-by-date-time', component: GetBookingByDateTimeComponent},
      {path: 'booking/booking', component: BookingComponent}
    ]
    
    ),
  ]
})
export class BookingModule { }
