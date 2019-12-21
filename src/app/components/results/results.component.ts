import { Component, OnInit, Input } from '@angular/core';
import { HttpRequestsService } from "../../services/http-requests.service";
import _ from "lodash";


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input('animateTop') animateTop: boolean;
  sortBy = "stars";
  categories: any[] = [];
  results: any[] = [];
  constructor(private httpReq: HttpRequestsService) { 
    
  }

  ngOnInit() {
    this.httpReq.getCategories().toPromise().then(result => {
      console.log('getCategories',result);
      this.httpReq.categories = result;
      this.categories = result;
      this.results =  this.httpReq.getResults();
    });
  }

  
  sort(val): any {
    this.sortBy = val;
    if (val === "stars"){
      this.results = _.sortBy(this.results, [function(o) { return o.rate; }]).reverse();
    }
    if (val === "reviews"){
      this.results = _.sortBy(this.results, [function(o) { return o.reviews.length; }]).reverse();
    }
  }

}
