import { Component, OnInit, ViewChild} from "@angular/core";
import { HttpRequestsService } from "../../services/http-requests.service";
import * as moment from "moment";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  search = {
    what : '',
    where: '',
    when :'',
    write :''
  }
  animateTop = false;
  areas: string[] = [];
  categories: any[] = [];

  constructor(private httpReq: HttpRequestsService) {
  }

  ngOnInit() {
    this.httpReq.getAreas().toPromise().then(result => {
      this.areas = result;
    });
    this.httpReq.getCategories().toPromise().then(result => {
      this.categories = result;
    });
  }
  dateChange(date){
    this.search.when = moment(date).format("LL");
  }
  sendMessage(r){
    console.log(r);
    
  }
}
