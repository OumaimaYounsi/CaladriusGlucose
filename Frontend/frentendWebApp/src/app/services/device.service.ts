import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devcie } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http:HttpClient) {}

    getDevices(){
      return this.http.get<Devcie[]>('http://localhost:3000/device')
    }
}
