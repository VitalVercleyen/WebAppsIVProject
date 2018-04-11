import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ValidateService } from "../../services/validate.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  creator: String;
  name: String;
  description: String;
  minAge: Number;
  maxAge: Number;
  place: String;
  duration: Number;
  players: Number;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private validateService: ValidateService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.authService.getProfile().subscribe(
      profile => {
        this.creator = profile.user.username;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }

  onSaveSubmit() {
    window.scroll(0, 0);

    const spelletje = {
      creator: this.creator,
      name: this.name,
      description: this.description,
      minimumAge: this.minAge,
      maximumAge: this.maxAge,
      place: this.place,
      Duration: this.duration,
      Players: this.players
    };

    if (!this.validateService.validateSpelletje(spelletje)) {
      this.flashMessage.show("Gelieve alle velden in te vullen", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }

    if (!this.validateService.validateAge(spelletje)) {
      this.flashMessage.show(
        "de minimum leeftijd moet steeds lager zijn dan de maximum leeftijd, ze mogen ook niet negatief zijn",
        {
          cssClass: "alert-danger",
          timeout: 3000
        }
      );
      return false;
    }

    if (!this.validateService.validatePlayers(spelletje)) {
      this.flashMessage.show("het aantal spelers mag niet negatief zijn", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }
    if (!this.validateService.validateDuration(spelletje)) {
      this.flashMessage.show("De tijd mag niet negatief zijn", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }

    this.authService.saveSpelletje(spelletje).subscribe(data => {
      this.flashMessage.show("Je spelletje is succesvol opgeslagen", {
        cssClass: "alert-success",
        timeout: 70000
      });
      this.router.navigate(["/spelletjes"]);
    });
  }
}
