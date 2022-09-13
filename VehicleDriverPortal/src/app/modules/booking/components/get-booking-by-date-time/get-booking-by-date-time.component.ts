import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../booking.service';
import { IBooking } from '../../interface/booking';

@Component({
  selector: 'app-get-booking-by-date-time',
  templateUrl: './get-booking-by-date-time.component.html',
  styleUrls: ['./get-booking-by-date-time.component.css']
})
export class GetBookingByDateTimeComponent implements OnInit {
  public isLoading: boolean=true;
  public bookings : IBooking[]=[];
  constructor(private _service:BookingService) { }
  
  
  ngOnInit(): void {
  }
  form = new FormGroup({
    startDateTime:new FormControl(new Date(),[Validators.required]),
    endDateTime:new FormControl(new Date(),[Validators.required]),
    
  });
  getAllBookingsByDateTime():void{
    this.isLoading = true;
    this._service.getBookingByDateTime(this.form.value.startDateTime as Date,this.form.value.endDateTime as Date).subscribe(
      
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
