import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { IAlert } from 'src/app/modules/booking/interface/alert';
import { ALERT_TYPES } from 'src/app/modules/booking/interface/alert-types';
import { ComponentsServiceService } from '../components-service.service';
import { ILoginRequest } from '../interface/LoginRequest';
import { ILoginResponse } from '../interface/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alerts : IAlert[] = [];
  isCreated=false;
  danger=false;
  success=false;
  info=false;
  isLoading: boolean = false;

  constructor(private _service: ComponentsServiceService,private _authService: AuthService) {
    
   }

  ngOnInit(): void {
    if (this._authService.isAuthenticated()) {
      this._authService.navigate(['']);
      return;
    }
  }
  form = new FormGroup({
    // booking_ID: new FormControl(null, [Validators.required]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  
  });

  login(): void {
    this.isLoading = true;
    this._service.login(this.form.value as ILoginRequest).subscribe(
      (value) => {
        console.log(value);
        this.handleLoginSuccess(value);
        this.addAlert(ALERT_TYPES.SUCCESS,"Login Sucessfully");
        this.form.reset();
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.addAlert(ALERT_TYPES.DANGER , "Login Failed");
        this.danger=true;
        this.isLoading = false;
      }
    );
  }
  handleLoginSuccess(value: ILoginResponse): void {
    this._authService.handleLoginSuccess(value.token, ['home']);
  }
  
  closeAlert(index: number): void {
    this.alerts.splice(index, 1);
  }

  addAlert(type:string, msg: string): void {
    this.alerts.push({type, msg} as IAlert);
  }

}
