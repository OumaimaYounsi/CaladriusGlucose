import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Devcie } from 'src/app/models/device.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-prodacts',
  templateUrl: './prodacts.component.html',
  styleUrls: ['./prodacts.component.css']
})
export class ProdactsComponent implements OnInit {
  listDevices: Devcie[] = [];
  
  constructor(private DeviceService: DeviceService){}

  ngOnInit(): void {
    this.DeviceService.getDevices().subscribe((data: Devcie[]) => {
      this.listDevices = data;
      console.log("data"+data)
    },
  (error: HttpErrorResponse) => {
    console.error('An error occurred:', error.message);
    // You can add additional error handling logic here
  });
    
    
  }

}
