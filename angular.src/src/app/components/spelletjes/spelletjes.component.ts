import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-spelletjes",
  templateUrl: "./spelletjes.component.html",
  styleUrls: ["./spelletjes.component.css"]
})
export class SpelletjesComponent implements OnInit {
  searchParam: String;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  zoek() {
    this.authService.storeSearchParam(this.searchParam);
    this.router.navigate(["/spelletjesSearchResult"]);
  }
}
