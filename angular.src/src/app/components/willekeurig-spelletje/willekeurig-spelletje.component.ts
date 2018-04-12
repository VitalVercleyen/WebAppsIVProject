import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-willekeurig-spelletje",
  templateUrl: "./willekeurig-spelletje.component.html",
  styleUrls: ["./willekeurig-spelletje.component.css"]
})
export class WillekeurigSpelletjeComponent implements OnInit {
  spelletje: [Object];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getRandomSpelletje().subscribe(
      spelletjeRes => {
        this.spelletje = spelletjeRes;
        console.log(spelletjeRes);
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
