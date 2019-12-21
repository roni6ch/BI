import { Component , ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { AuthService } from "src/app/services/auth.service";
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  constructor(private _auth: AuthService) {}
}
