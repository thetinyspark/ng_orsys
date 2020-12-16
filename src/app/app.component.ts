import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateClock } from './actions/clock.actions';
import { Product } from './entity/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public clock:Observable<string>;

  constructor(private store:Store<{clock: string}>) {
    this.clock = this.store.select('clock');
  }

  public majClock(){
    this.store.dispatch(updateClock());
  }

}
