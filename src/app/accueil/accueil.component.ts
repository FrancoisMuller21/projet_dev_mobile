import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  @Input() path: string = "assets/voiture_image/";
  imgFord: string = "ford.jpg";
  imgInfinity: string = "infinity.jpg";
  imgPorsche:string = "porsche.jpg";
  constructor() { }

  ngOnInit(): void {
  }
}
