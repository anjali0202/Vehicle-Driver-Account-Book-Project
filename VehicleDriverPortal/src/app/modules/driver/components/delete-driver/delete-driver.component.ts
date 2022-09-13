import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDriver } from 'src/app/modules/booking/interface/driver';
import { DriverService } from '../../driver.service';

@Component({
  selector: 'app-delete-driver',
  templateUrl: './delete-driver.component.html',
  styleUrls: ['./delete-driver.component.css']
})
export class DeleteDriverComponent implements OnInit {

  public isLoading: boolean=true;
  
  constructor( private _service:DriverService) { }
  form = new FormGroup({
    driverId:new FormControl(null,[Validators.required])
  })

  ngOnInit(): void {
  }
  deleteDriver():void{
    this.isLoading = true;
    if(this.form.value.driverId ==null) return;
    this._service.deleteDriver(this.form.value.driverId as number).subscribe(
      
      (value) => {
        console.log(value);
         
        
        this.isLoading = false;
      },
      (error) => {console.error(error);
      this.isLoading = false;}
    ); 
      }    
}
