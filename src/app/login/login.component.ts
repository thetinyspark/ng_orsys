import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password:string = ""; 
  public username:string = ""; 

  constructor(private userService:UserService) { }

  public onLogin(){
    this.userService.login(this.username, this.password).subscribe(
      (connected:boolean)=>{
        alert(connected);
      }
    );
  }

  ngOnInit(): void {
  }

}
