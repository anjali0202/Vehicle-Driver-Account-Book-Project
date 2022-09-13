import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ILoginRequest } from './interface/LoginRequest';
import { ILoginResponse } from './interface/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class ComponentsServiceService {

  private _baseUrl: string = "https://localhost:44322/api/Auth/";
  constructor(private _http: HttpClient) { 
  }
  private errorHandler(error: HttpErrorResponse) {
    let errMsg = '';
    switch (error.status) {
      case 0:
        errMsg = 'Server Down';
        break;
      case 401:
        errMsg = "Unauthorized Access";
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

  login(loginrequest: ILoginRequest):Observable<ILoginResponse>
  {
    return this._http
      .post<ILoginResponse>(this._baseUrl + 'login', loginrequest)
      .pipe<ILoginResponse>(catchError(this.errorHandler));
  }
}
