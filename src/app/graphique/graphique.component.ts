import { Component, OnInit } from '@angular/core';
import { BddVoitureService } from '../bdd-voiture.service';
import { Car } from '../car.model';
import { EChartsOption } from 'echarts';
import {ThemeOption} from "ngx-echarts";


@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {
   
  clic = false;
  loadedCar: Car[] = [];
  CarsBrand: string[] = [];
  brandSelected: string = "";
  chart: any;

  constructor(private http: BddVoitureService) {}

  ngOnInit(): void {
    this.http.getData().subscribe(
      data => {
        this.loadedCar = data;
        for(let elem of this.loadedCar){
          if(this.CarsBrand.indexOf((elem.brand).toString()) == -1) {
            this.CarsBrand.push((elem.brand).toString());
            console.log(this.CarsBrand);
          }
          
        }
        return this.loadedCar;
      }
    
    ); 
    
  }



  getAllCar(){
    this.http.getData().subscribe(
      data => {
        this.loadedCar= data;
        return this.loadedCar;
      }
    ); 
  }

  getId($event:Event):void{
    let target: HTMLElement = ($event.currentTarget as HTMLElement);
    if(this.clic){
      const elem = document.getElementById(target.id);
      elem!.style.backgroundColor = "lightblue";
      this.clic = !this.clic;
    } else {
      const elem = document.getElementById(target.id);
      elem!.style.backgroundColor = "lightgreen";
      this.clic = !this.clic;
    }
  }

  theme: ThemeOption = {
    itemStyle:{
      color: [
        '#55C22D', '#ffeeff'
      ],
    },
  }

  chartOption: EChartsOption = {

    xAxis: {
      type: 'category',
      data: [
        '0$-2000$',
        '2000$-5000$',
        '5000$ et +'
      ],

    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}'
    }
  };


onChange(marque: string) {
  let map: Map<string, any> = new Map();
  map.set("0-2000", {value: 0, itemStyle: {color: '#8377f5'}});
  map.set("2000-5000", {value: 0, itemStyle: {color: '#c700b4'}});
  map.set("5000 et +", {value: 0, itemStyle: {color: '#56ff00'}});
  
    this.loadedCar.forEach(car => {
      if(car.brand == marque) {
          if(car.price >= 0 && car.price <= 2000) {
            map.get('0-2000').value++;
          } else if(car.price > 2000 && car.price <= 5000){
            map.get('2000-5000').value++;
          } else {
            map.get('5000 et +').value++;
            console.log(car);
          }
      }
      
      
    });

    let valeurs = Array.from(map.values());
    this.chartOption.series = [{type: "bar", color: ['blue', 'red', 'yellow'], data: valeurs}];
    this.chart.setOption(this.chartOption);  
}

onChartInit(myCharts: any, marque: string) {
    this.chart = myCharts;
    this.onChange(marque);
  }
}
