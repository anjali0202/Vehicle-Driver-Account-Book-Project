import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVehicle } from './interface/vehicle';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IUpdateVehicle } from './interface/updateVehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private _baseUrl: string = "https://localhost:44371/api/Vehicle/";

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
  addVehicle(vehicle: IVehicle): Observable<any> {
    console.log(vehicle);
    return this._http
      .post<any>(this._baseUrl + 'addVehicle', vehicle)
      .pipe<any>(catchError(this.errorHandler));
}
getAllVehicles(): Observable<IVehicle[]> {
  return this._http
    .get<IVehicle[]>(this._baseUrl + 'allVehicles')
    .pipe<IVehicle[]>(catchError(this.errorHandler));
}
deleteVehicle(registrationNum:number):Observable<any>{
  return this._http
  .delete<any>(this._baseUrl + "deleteVehicle?regNo=" + registrationNum)
  .pipe<any>(catchError(this.errorHandler));
}
getVehicleByRegistrationNumber(registrationNo:number):Observable<IVehicle>{
  return this._http
  .get<IVehicle>(this._baseUrl + "vehiclesByRegistrationNo?regNo=" + registrationNo)
  .pipe<IVehicle>(catchError(this.errorHandler));
}
getVehicleByType(vehicleType:string):Observable<IVehicle[]>{
  return this._http
  .get<IVehicle[]>(this._baseUrl + "vehiclesByType?type=" + vehicleType)
  .pipe<IVehicle[]>(catchError(this.errorHandler));
}
updateVehicle(registrationNo:number,vehicle:IUpdateVehicle):Observable<any>{
  return this._http
  .put<any>(this._baseUrl + "updateVehicle?regNo=" + registrationNo ,   vehicle )
  .pipe<any>(catchError(this.errorHandler)); 
}
}
