import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public user:User | null = null;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user:User)=>{
        this.user = user;
      }
    )
  }

}
