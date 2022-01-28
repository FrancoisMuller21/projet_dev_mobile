import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class BddVoitureService {
  private url: string = "https://web-mobil-angular-default-rtdb.firebaseio.com/"

  constructor(private http: HttpClient) { }


  getData() {
    return this.http
    .get<{ [key: string]: Car }>(this.url + ".json")
    .pipe(
      map(
        data => {
          const dataArray = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              dataArray.push({ ...data[key], 'index': key })
            }
          }
          return dataArray;
        }
      )
    )
  }
}
