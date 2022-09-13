import { Component, OnInit } from '@angular/core';
import { IDriver } from 'src/app/modules/booking/interface/driver';
import { DriverService } from '../../driver.service';

@Component({
  selector: 'app-get-all-drivers',
  templateUrl: './get-all-drivers.component.html',
  styleUrls: ['./get-all-drivers.component.css']
})
export class GetAllDriversComponent implements OnInit {

  public drivers:IDriver[]=[];
  isLoading: boolean = true;
  constructor(private _service: DriverService) { 

  }

  ngOnInit(): void {
    this.getAllDrivers();
  }
  getAllDrivers():void{
    this.isLoading = true;
    this._service.getAllDrivers().subscribe(
      
      (value) => {
        console.log(value);
         
        this.drivers = value;
        this.isLoading = false;
      },
      (error) => {console.error(error);
      this.isLoading = false;}
    ); 
 }

}


