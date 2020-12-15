import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private connected:boolean = false;
  private fromUrl:string = ""; 
  private deniedUrl:string = "";

  constructor(private client:HttpClient, private router:Router) { }

  public getUser():Observable<User>{
    return this.client.get<User>(environment.userUrl).pipe( 
      map( 
        (user:User)=>{
          // on triche en faisant en sorte que notre utilisateur ait toujours 
          // sa propriété connected égale à celle stockée sur notre instance 
          // de UserService

          // si dans notre .json connected = true, pas besoin de tricher 
          if( user.connected){
            this.connected = true;
          }
          user.connected = this.connected;
          return user;
        }
      )
    );
  }

  public login(
    username:string, 
    password:string, 
    redirect:boolean = false
  ):Observable<boolean>{
    if( username === "admin" && password === "123456"){
      this.connected = true;
    }
    else{
      this.connected = false;
    }

    return of(this.connected).pipe( 
      map( 
        (connected:boolean) => {
          if( connected && redirect ){
            this.router.navigate([this.fromUrl]);
          }
          return connected;
        }
      )
    );
  }

  public prompt(fromUrl:string, deniedUrl:string){
    this.fromUrl = fromUrl; 
    this.deniedUrl = deniedUrl;
    this.router.navigate(["/login"]);
  }



  public isConnected():Observable<boolean>{
  
    return this.getUser().pipe( 
      map( 
        (user:User | null) => {
          if( user !== null )
            return user.connected;
          else
            return false;
        }
      )
    )
  }
}
