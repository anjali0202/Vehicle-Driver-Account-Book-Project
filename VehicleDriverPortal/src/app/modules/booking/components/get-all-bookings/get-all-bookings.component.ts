import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../booking.service';
import { IBooking } from '../../interface/booking';

@Component({
  selector: 'app-get-all-bookings',
  templateUrl: './get-all-bookings.component.html',
  styleUrls: ['./get-all-bookings.component.css']
})
export class GetAllBookingsComponent implements OnInit {
  public bookings:IBooking[]=[];
  isLoading: boolean = true;
  constructor(private _service: BookingService) { 

  }
  

  ngOnInit(): void {
    this.getAllBookings();
  }
  
 getAllBookings():void{
  
  this.isLoading = true;
    this._service.getAllBookings().subscribe(
      
      (value) => {
        console.log(value);
         
        this.bookings = value;
        this.isLoading = false;
      },
      (error) => {console.error(error);
      this.isLoading = false;}
    ); 
 }
}
