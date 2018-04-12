import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-spelletje",
  templateUrl: "./spelletje.component.html",
  styleUrls: ["./spelletje.component.css"]
})
export class SpelletjeComponent implements OnInit {
  @Input() name: String;
  @Input() creator: String;
  @Input() description: String;
  @Input() minimumAge: Number;
  @Input() maximumAge: Number;
  @Input() place: String;
  @Input() Duration: Number;
  @Input() Players: Number;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onClick() {
    this.authService.storeSelectedSpelletje(this.name);

    this.router.navigate(["/spelletjesDetail"]);
  }
}
