import { Component, OnInit, ViewChild} from "@angular/core";
import { HttpRequestsService } from "../../services/http-requests.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  lat: number = 32.0055;
  lng: number = 34.8854;
  zoom: number = 10;
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
}
