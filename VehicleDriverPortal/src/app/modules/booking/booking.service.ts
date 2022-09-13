import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IBooking } from './interface/booking';
import { IDrivervehicle } from './interface/drivervehicle';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _baseUrl: string = "https://localhost:44305/api/Booking/";
  constructor(private _http: HttpClient) { }
  private errorHandler(error: HttpErrorResponse) {
    let errMsg = '';
    switch (error.status) {
      case 0:
        errMsg = 'Server Down';
        break;
      
      case 409:
        errMsg = "Conflict"
        break;
      default:
        errMsg = error.message || 'Server Error';
        break;
    }
    console.error(error);
    return throwError(errMsg);
  }

  addBooking(booking: IBooking): Observable<any> {
    booking.driverId=Number(booking.driverId);
    booking.vehicleId=Number(booking.vehicleId);
    console.log(booking);
    return this._http
      .post<any>(this._baseUrl + 'addBooking', booking)
      .pipe<any>(catchError(this.errorHandler));
  }
  getAllBookings(): Observable<IBooking[]> {
    return this._http
      .get<IBooking[]>(this._baseUrl + 'getAllBookings')
      .pipe<IBooking[]>(catchError(this.errorHandler));
  }
  getBookingById(bookingId: number): Observable<IBooking> {
    return this._http
      .get<IBooking>(this._baseUrl + 'getBookingById?id='+ bookingId)
      .pipe<IBooking>(catchError(this.errorHandler));
  }
  getBookingByDateTime(startdateTime: Date,endDateTime : Date): Observable<IBooking[]> {
    return this._http
      .get<IBooking[]>(this._baseUrl + 'getBookingsbyDateTime?startDateTime='+ startdateTime+  "&endDateTime=" + endDateTime)
      .pipe<IBooking[]>(catchError(this.errorHandler));
  }
  getAvailableDriverVehicle(): Observable<IDrivervehicle> {
    return this._http
      .get<IDrivervehicle>(this._baseUrl + 'getAllAvailableDriverVehicle')
      .pipe<IDrivervehicle>(catchError(this.errorHandler));
  }
}
