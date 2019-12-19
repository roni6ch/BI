import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import _ from "lodash";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  lat: number = 32.0055;
  lng: number = 34.8854;
  zoom: number = 10;
  myControl = new FormControl();
  options: any[] = [{"name":"הנדימן","city":"רחובות"},{"name":"האינסטלטור","city":"מודיעין"},{"name":"שרברב","city":"מודיעין"}];
  categories : any[] = [{"name":"אינסטלטורים","img":"plumber.png"},{"name":"מיזוג","img":"airCondition.png"},{"name":"חשמל","img":"electrician.png"},{"name":"דודי שמש","img":"sunBoiler.png"},{"name":"מוצרי חשמל","img":"electricTech.png"}];
  areas : string[] =['שפלה','דרום','צפון','מרכז'];
  results : any[] = [{
    tz:"123456789",
    name:"roni",
    family:"chabra",
    category:"plumber",
    role:"plumbing",
    description:"great plumber with 14 year of experience...",
    logo:"person_logo.jpg",
    web:"www.google.co.il",
    phone:"050-3000020",
    rate:4.4,
    reviews:['great plumber','did a good job!'],
    gallery:['https://pbs.twimg.com/profile_images/631640947097473024/zd4mnrjZ_400x400.png','https://miro.medium.com/fit/c/256/256/0*6jKT6GHG-HMkEY6K.jpg','http://plumbermeadowsplace.com/images/PA4.png'],
    areas:['רחובות','מודיעין'],
    business_name: "Roni Plumbing"
  },{
    tz:"123456789",
    name:"roni",
    family:"chabra",
    category:"plumber",
    role:"plumbing",
    description:"great plumber with 14 year of experience...",
    logo:"person_logo.jpg",
    web:"www.google.co.il",
    phone:"050-3000020",
    rate:4.2,
    reviews:['great plumber','did a good job!','sd'],
    gallery:['https://pbs.twimg.com/profile_images/631640947097473024/zd4mnrjZ_400x400.png','https://miro.medium.com/fit/c/256/256/0*6jKT6GHG-HMkEY6K.jpg','http://plumbermeadowsplace.com/images/PA4.png'],
    areas:['חולון','ראשון לציון'],
    business_name: "Roni Plumbing"
  },{
    tz:"123456789",
    name:"roni",
    family:"chabra",
    category:"plumber",
    role:"plumbing",
    description:"great plumber with 14 year of experience...",
    logo:"person_logo.jpg",
    web:"www.google.co.il",
    phone:"050-3000020",
    rate:4.7,
    reviews:['great plumber','did a good job!'],
    gallery:['https://pbs.twimg.com/profile_images/631640947097473024/zd4mnrjZ_400x400.png','https://miro.medium.com/fit/c/256/256/0*6jKT6GHG-HMkEY6K.jpg','http://plumbermeadowsplace.com/images/PA4.png'],
    areas:['רחובות','נס ציונה'],
    business_name: "Roni Plumbing"
  }]
  filteredOptions: Observable<string[]>;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  panelOpenState = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  /*  this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );
      */
  }
/*  private filter(value: any): string[] {
    if (value !== "" && typeof(value) !== "undefined")
      return this.options.filter(e => e.name.includes(value.toLowerCase()))
    return this.options
  }
  */
}
