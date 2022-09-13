import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../booking.service';
import { IBooking } from '../../interface/booking';

@Component({
  selector: 'app-get-booking-by-id',
  templateUrl: './get-booking-by-id.component.html',
  styleUrls: ['./get-booking-by-id.component.css']
})
export class GetBookingByIdComponent implements OnInit {
   booking !:IBooking ;
  public isLoading: boolean=true;
  constructor( private _service:BookingService) { }

  ngOnInit(): void {
  }
  
  form = new FormGroup({
    booking_ID:new FormControl(null,[Validators.required]),
  });
    
    
  
  getBookingById():void{
    this.isLoading = true;
    if(this.form.value.booking_ID ==null) return;
    this._service.getBookingById(this.form.value.booking_ID as number).subscribe(
      
      (value) => {
        console.log(value);
         
        this.booking = value;
        this.isLoading = false;
      },
      (error) => {console.error(error);
      this.isLoading = false;}
    ); 
  }
}
