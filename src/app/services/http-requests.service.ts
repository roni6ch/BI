import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as faker from "faker";
import * as moment from "moment";
import _ from "lodash";
import { Observable } from 'rxjs';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  private _areas_url = "./assets/json/areas.json";
  private _categories_url = "./assets/json/categories.json";
  results = []; areas = []; categories= [];

  public areasSubject = new BehaviorSubject<any[]>([]);
  public categoriesSubject = new BehaviorSubject([]); 
  public resultsSubject = new BehaviorSubject<any[]>([]); 

  constructor(private http: HttpClient) { 
  }
  getAreas() {
    return this.http.get<any[]>(this._areas_url);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this._categories_url);
  }
  getResults() {
    for (var i = 0; i < 10; i++)
    this.results.push({
      tz: faker.random.uuid(),
      name: faker.name.firstName(),
      family: faker.name.lastName(),
      category: this.categories[
        Math.floor(Math.random() * this.categories.length)
      ].name,
      role: "plumbing",
      description: faker.lorem.sentence,
      logo: faker.image.avatar(),
      web: faker.internet.url(),
      phone: faker.phone.phoneNumberFormat(),
      rate: (Math.random() * (1 - 5) + 5).toFixed(1),
      reviews: [...Array(Math.floor(Math.random() * 5 + 1))].map((_, i) => {
        return {
          review: faker.lorem.sentence(),
          rate: (Math.random() * (1 - 5) + 5).toFixed(1),
          name: faker.name.firstName() + " " + faker.name.lastName(),
          date: moment(this.randomDate()).format("L")
        };
      }),
      gallery: Array.from(
        { length: Math.floor(Math.random() * 5 + 1) },
        (v, k) => faker.random.image()
      ),
      areas: Array.from(
        { length: Math.floor(Math.random() * 5 + 1) },
        (v, k) => faker.address.city()
      ),
      business_name: faker.company.companyName()
    });
    this.results = _.sortBy(this.results, [function(o) { return o.rate; }]).reverse();
  console.log(this.results);
    return this.results;
  }


  handleError(arg0: string): any {
    throw new Error("Method not implemented.");
  }

  randomDate(): any {
    return new Date(
      new Date(2012, 0, 1).getTime() +
        Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime())
    );
  }

}
