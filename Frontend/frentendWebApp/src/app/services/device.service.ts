import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devcie } from '../models/device.model';
import { env } from '../env/env';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http:HttpClient) {}

    getDevices(){
      return this.http.get<Devcie[]>(`${env.api_url}/device`)
    }


    addDevice(d: Devcie){
      return this.http.put(`${env.api_url}/device/add`, d);
    }
}
