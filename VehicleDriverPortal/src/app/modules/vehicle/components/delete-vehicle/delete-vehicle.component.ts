import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.css']
})
export class DeleteVehicleComponent implements OnInit {

  public isLoading: boolean=true;
  
  constructor( private _service:VehicleService) { }
  form = new FormGroup({
    vehicleId:new FormControl(null,[Validators.required])
  })

  ngOnInit(): void {
  }
  deleteVehicle():void{
    this.isLoading = true;
    if(this.form.value.vehicleId ==null) return;
    this._service.deleteVehicle(this.form.value.vehicleId as number).subscribe(
      
      (value) => {
        console.log(value);
         
        
        this.isLoading = false;
      },
      (error) => {console.error(error);
      this.isLoading = false;}
    ); 
      }    

}
