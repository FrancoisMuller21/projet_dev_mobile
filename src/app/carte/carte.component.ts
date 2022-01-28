import { Component, OnInit } from '@angular/core';
import { BddVoitureService } from '../bdd-voiture.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  loadedCar: Car[] = [];
  loadedCarWithLimit: Car[] = [];

  constructor(private http: BddVoitureService ) {}

  ngOnInit(): void {
    this.http.getData().subscribe(
      data => {
        this.loadedCar = data;
        console.log("Données récupérer de la firebase !");
        console.log(this.loadedCar);
        return this.loadedCarWithLimit = this.loadedCar;
      }
    ); 
  }

  getCarwithLimit(value:number){
    return this.loadedCarWithLimit = this.loadedCar.slice(0,value);
  }

  getAllCar(){
    this.http.getData().subscribe(
      data => {
        this.loadedCarWithLimit = data;
        return this.loadedCarWithLimit = this.loadedCar;
      }
    ); 
  }

}
