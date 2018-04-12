import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-spelletjes-search-result",
  templateUrl: "./spelletjes-search-result.component.html",
  styleUrls: ["./spelletjes-search-result.component.css"]
})
export class SpelletjesSearchResultComponent implements OnInit {
  spelletjes: [Object];
  searchParam: String;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.searchParam = this.authService.getSearchParam();

    this.authService.getSpelletjeLike().subscribe(
      spelletjeRes => {
        this.spelletjes = spelletjeRes;
        console.log(spelletjeRes);
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
