import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-spelletje-detail",
  templateUrl: "./spelletje-detail.component.html",
  styleUrls: ["./spelletje-detail.component.css"]
})
export class SpelletjeDetailComponent implements OnInit {
  spelletje: Object;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getSelectedSpelletje().subscribe(
      spelletjeRes => {
        this.spelletje = spelletjeRes[0];
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
