import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginUser = {};
  signin = true;
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}
  authenticate() {
    if (!this.signin) {
      //Sign up
      this._auth.registerUser(this.loginUser).subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token',res.token);
          this._router.navigate(['app-homepage']);
        },
        err => console.log(err)
      );
    } else {
      //Sign in
      this._auth.validateUser(this.loginUser).subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token',res.token);
          this._router.navigate(['app-homepage']);
        },
        err => console.log(err)
      );
    }
  }
}
