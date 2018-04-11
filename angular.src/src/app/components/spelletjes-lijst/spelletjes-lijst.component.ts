import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-spelletjes-lijst",
  templateUrl: "./spelletjes-lijst.component.html",
  styleUrls: ["./spelletjes-lijst.component.css"]
})
export class SpelletjesLijstComponent implements OnInit {
  spelletjes: [Object];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getSpelletjes().subscribe(
      spelletjesRes => {
        this.spelletjes = spelletjesRes;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
