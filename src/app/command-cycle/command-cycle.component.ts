import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-command-cycle',
  templateUrl: './command-cycle.component.html',
  styleUrls: ['./command-cycle.component.css']
})
export class CommandCycleComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

}
