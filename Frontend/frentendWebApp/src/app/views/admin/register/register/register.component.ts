import { Component } from '@angular/core';
import {User} from '../../../../models/user.model'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  userModel = new User()
  constructor (private AuthServer: AuthService){

  }
  ngOnInit() : void{
    this.userModel= new User()
  }
  signeUp(){
    this.userModel.id = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
    this.AuthServer.AddUser(this.userModel).subscribe();
  }
}
