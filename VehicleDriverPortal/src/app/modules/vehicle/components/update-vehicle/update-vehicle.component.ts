import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUpdateVehicle } from '../../interface/updateVehicle';
import { IVehicle } from '../../interface/vehicle';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {
  public vehicles:IVehicle[]=[];
  constructor(private _service:VehicleService){}
  ngOnInit(): void {
    this._service.getAllVehicles().subscribe(value=>{
      console.log(value);
        this.vehicles=value;
    });
  }
  form=new FormGroup({
    vehicleId: new FormControl(0, [Validators.required]),
  })
  form2= new FormGroup({
    
    modelName: new FormControl('', [Validators.required]),
    vehicleType: new FormControl('', [Validators.required]),
    numberOfSeat: new FormControl(0, [Validators.required]),
    acAvailable: new FormControl('', [Validators.required]),
    
  });
   handleVehicleChange(){
    if(this.form.invalid) return;
    console.log(this.form.value);
    const vehicle :IVehicle=this.vehicles.find(x=>x.registrationNo==this.form.value.vehicleId) as IVehicle;
    this.form2.setValue({
      modelName:vehicle.modelName || '',
      vehicleType:vehicle.vehicleType || '',
      numberOfSeat:vehicle.numberOfSeat || 0,
      acAvailable:vehicle.acAvailable || ''
    })

   }
   updateVehicle():void{
    this._service.updateVehicle(this.form.value.vehicleId as number,this.form2.value as IUpdateVehicle).subscribe(
      (value)=>{
        console.log(value);
      },
      (error) => {
        console.error(error);}
    )
      


      
    }
   }
  
    

