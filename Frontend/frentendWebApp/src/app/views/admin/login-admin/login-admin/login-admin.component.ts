import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  userModule =new User()
  constructor( private authService: AuthService){}

  ngOnInt(): void{
    this.userModule= new User();
  }
  loginUser(){
    
    this.authService.login(this.userModule).subscribe((data)=>{
      console.log(data)
      localStorage.setItem("user",JSON.stringify(data))
      
  })}

}
