import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
    const value:number = 15; 
    let obs:Observable<any> | null = null;

        // if( value < 18 )
        //     obs = of({isAdult: true});
        // else
        //     obs = of(null);

      obs = new Observable(observer => {
            if ( value < 18) {
                observer.next({ isAdult: true });
            } else {
                observer.next(null);
            }
        });

    obs.subscribe(
      (data:any) => {
        console.log(data);
        
      }
    )

     
  }

}
