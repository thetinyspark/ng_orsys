import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-stagiaire',
  templateUrl: './random-stagiaire.component.html',
  styleUrls: ['./random-stagiaire.component.css']
})
export class RandomStagiaireComponent implements OnInit {

  public current: string = "";
  constructor() {
    const stagiaires: string[] = [
      "Arnaud", "Philippe",
      "Frédéric", "Gaël",
      "Johan", "Kevin",
      "Cédric", "Mohammed"
    ];

    stagiaires.sort( (a,b) => Math.random() - 0.5 );
    this.current = stagiaires[0];
  }

  ngOnInit(): void {
  }

}
