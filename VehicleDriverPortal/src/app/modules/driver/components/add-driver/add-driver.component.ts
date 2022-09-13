import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAlert } from 'src/app/modules/booking/interface/alert';
import { ALERT_TYPES } from 'src/app/modules/booking/interface/alert-types';
import { IDriver } from 'src/app/modules/booking/interface/driver';
import { DriverService } from '../../driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  alerts : IAlert[] = [];
  isCreated=false;
  danger=false;
  success=false;
  info=false;
  isLoading: boolean = false;

  constructor(private _service: DriverService) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    driverAge: new FormControl(null, [Validators.required]),
    vehicleType: new FormControl(null, [Validators.required]),
  });
  addDriver():void{
    this.isLoading = true;
    this._service.addDriver(this.form.value as IDriver).subscribe(
      (value) => {
        console.log(value);
        this.addAlert(ALERT_TYPES.SUCCESS,"Booking Sucessfully");
        this.form.reset();
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.addAlert(ALERT_TYPES.DANGER , "Failed");
        this.danger=true;
        this.isLoading = false;
      }
    );
    }
    closeAlert(index: number): void {
      this.alerts.splice(index, 1);
    }
  
    addAlert(type:string, msg: string): void {
      this.alerts.push({type, msg} as IAlert);
    }
}
