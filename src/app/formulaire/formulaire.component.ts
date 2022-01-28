import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car.model';
import { BddVoitureService } from '../bdd-voiture.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  brands: string[] = [];
  cars: Car[] = [];
  priceMinCar!: number;
  priceMaxCar!: number;
  brandCar!: string;

  constructor(private bdd: BddVoitureService) { }

  ngOnInit(): void {
    this.bdd.getData().subscribe(
      (res:any) => {
        for(let car of res){
          if(!this.brands.includes(car["brand"])){
            this.brands.push(car["brand"]);
          }
        }
      }
    )
  }

  onSubmit(): void {
    this.cars = [];
    let tmpMin: number = parseFloat(this.priceMinCar as unknown as string);
    let tmpMax: number = parseFloat(this.priceMaxCar as unknown as string);

    if(this.brandCar != "") {
      if(tmpMin < tmpMax) {
        this.bdd.getData().subscribe(
          (res:any) => {
            for(let car of res) {
              if(car["brand"] == this.brandCar && 
                  car["price"] < this.priceMaxCar && 
                  car["price"] > this.priceMinCar) {

                    this.cars.push(car);
                }
            }
          }
        )
      }
    }
  }
}
