import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IVehicle } from '../../interface/vehicle';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-get-vehicles-by-type',
  templateUrl: './get-vehicles-by-type.component.html',
  styleUrls: ['./get-vehicles-by-type.component.css']
})
export class GetVehiclesByTypeComponent implements OnInit {

  public isLoading: boolean=true;
  public vehicles:IVehicle[]=[];
  constructor( private _service:VehicleService) { }
  form = new FormGroup({
    vehicleType:new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
  }
  getVehiclesByType():void{
    this.isLoading = true;
    this._service.getVehicleByType(this.form.value.vehicleType as string).subscribe(
      
      (value) => {
        console.log(value);
         
        this.vehicles= value;
        this.isLoading = false;
      },
      (error) => {console.error(error);
      this.isLoading = false;}
    ); 

  }
}
