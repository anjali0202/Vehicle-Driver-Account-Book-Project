import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IDriver } from '../booking/interface/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private _baseUrl: string = "https://localhost:44342/api/Driver/";
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

addDriver(driver: IDriver): Observable<any> {
    console.log(driver);
    return this._http
      .post<any>(this._baseUrl + 'addDriver', driver)
      .pipe<any>(catchError(this.errorHandler));
}

getAllDrivers():Observable<IDriver[]>{
  return this._http
  .get<any>(this._baseUrl + 'getAllDrivers')
  .pipe<any>(catchError(this.errorHandler));
}

getDriversByVehicleType(vehicleType:string):Observable<IDriver[]>{
  return this._http
  .get<IDriver[]>(this._baseUrl + 'driversByType?vehicleType=' + vehicleType)
  .pipe<IDriver[]>(catchError(this.errorHandler));
}

deleteDriver(driverId:number):Observable<any>{
  return this._http
  .delete<any>(this._baseUrl + "removeDriver?licenseNum=" + driverId)
  .pipe<any>(catchError(this.errorHandler));
}
}
