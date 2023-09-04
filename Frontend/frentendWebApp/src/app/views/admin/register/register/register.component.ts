import { Component } from '@angular/core';
import {User} from '../../../../models/user.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  contirmPass : any
  userModel = new User()
  constructor (){

  }
  ngOnInit() : void{
    this.userModel= new User()
  }
}
