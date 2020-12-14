import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private route:ActivatedRoute;
  public num:number = -1;

  constructor(route:ActivatedRoute) { 
    this.route = route;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      ( map:ParamMap ):void => {
        const num = map.get("tartampion"); 
        if( num != null ){
          this.num = parseInt(num);
        }
      }
    );
  }

}
