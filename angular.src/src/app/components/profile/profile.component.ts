import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: Object;
  userSpelletjes: [Object];
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.authService.getProfile().subscribe(
      profile => {
        this.user = profile.user;
      },
      err => {
        console.log(err);
        return false;
      }
    );
    this.authService.getUserSpelletjes().subscribe(
      spelletjesRes => {
        this.userSpelletjes = spelletjesRes;
        console.log(spelletjesRes);
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
