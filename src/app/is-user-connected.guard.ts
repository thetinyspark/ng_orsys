import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class IsUserConnectedGuard implements CanActivate {

  constructor(private userService: UserService, private router:Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.isConnected().pipe( 
      map(
        (connected:boolean)=>{
          if( connected === false ){
            this.router.navigate(["/login"]);
          }
          return connected;
        }
      )
    );
  }

}
