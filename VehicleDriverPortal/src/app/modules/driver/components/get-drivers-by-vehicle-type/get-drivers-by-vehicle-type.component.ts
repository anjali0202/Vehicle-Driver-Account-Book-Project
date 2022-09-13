import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDriver } from 'src/app/modules/booking/interface/driver';
import { DriverService } from '../../driver.service';

@Component({
  selector: 'app-get-drivers-by-vehicle-type',
  templateUrl: './get-drivers-by-vehicle-type.component.html',
  styleUrls: ['./get-drivers-by-vehicle-type.component.css']
})
export class GetDriversByVehicleTypeComponent implements OnInit {
  public isLoading: boolean=true;
  public drivers:IDriver[]=[];
  constructor( private _service:DriverService) { }
  form = new FormGroup({
    vehicleType:new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
  }
  getDriversByVehicleType():void{
    this.isLoading = true;
    this._service.getDriversByVehicleType(this.form.value.vehicleType as string).subscribe(
      
      (value) => {
        console.log(value);
         
        this.drivers= value;
        this.isLoading = false;
      },
      (error) => {console.error(error);
      this.isLoading = false;}
    ); 

  }
}

