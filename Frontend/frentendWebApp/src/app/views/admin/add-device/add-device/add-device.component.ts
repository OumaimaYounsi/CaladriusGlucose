import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core'; // Import OnInit
import { Devcie } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit { // Implement OnInit
  newDevice = new Devcie(); // Correct typo in 'Device' initialization
  minDate = "2022-10-01";
  maxDate = "2022-10-25";
  TodayDate : any;
  datel = new Date();
  currentYear = this.datel.getUTCFullYear();
  currentMonth = this.datel.getUTCMonth() + 1;
  currentDay = this.datel.getUTCDate();
  FinalMonth : any;
  FinalDay : any;

  constructor(private DeviceService: DeviceService){}

  ngOnInit(): void { 
    this.newDevice = new Devcie();

    if(this.currentMonth < 10){ 
      this.FinalMonth = "0" + this.currentMonth; 
    }
      else{
      this.FinalMonth = this.currentMonth;
      } 
      if(this.currentDay < 10){ 
      this.FinalDay = "0" + this.currentDay;
      }else{
      this.FinalDay = this.currentDay; 
      } 
      this.TodayDate = this.currentYear + "-" + this.FinalMonth + "-" + this.FinalDay;
      console.log(this.TodayDate) ; 
      this.maxDate = this.TodayDate;

      
  }
  add(){
    this.DeviceService.addDevice(this.newDevice).subscribe();
  }
  
}
  
