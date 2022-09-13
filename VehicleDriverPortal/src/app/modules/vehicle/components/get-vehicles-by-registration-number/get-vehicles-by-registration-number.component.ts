import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IVehicle } from '../../interface/vehicle';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-get-vehicles-by-registration-number',
  templateUrl: './get-vehicles-by-registration-number.component.html',
  styleUrls: ['./get-vehicles-by-registration-number.component.css']
})
export class GetVehiclesByRegistrationNumberComponent implements OnInit {

  vehicle !:IVehicle;
  public isLoading: boolean=true;
  constructor( private _service:VehicleService) { }

  ngOnInit(): void {
  }
  
  form = new FormGroup({
    vehicleId:new FormControl(null,[Validators.required]),
  });
  getVehicleByRegistrationNumber():void{
    this.isLoading = true;
    if(this.form.value.vehicleId ==null) return;
    this._service.getVehicleByRegistrationNumber(this.form.value.vehicleId as number).subscribe(
      
      (value) => {
        console.log(value);
         
        this.vehicle = value;
        this.isLoading = false;
      },
      (error) => {console.error(error);
      this.isLoading = false;}
    ); 

  }

}
