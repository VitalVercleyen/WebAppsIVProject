import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show("Gelieve all veldin in te vullen", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show("Gelieve een geldig email te gebruiken", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("Je bent geregistreerd", {
          cssClass: "alert-success",
          timeout: 3000
        });
        this.router.navigate(["/login"]);
      } else {
        this.flashMessage.show("Er is iets fout gelopen", {
          cssClass: "alert-danger",
          timeout: 3000
        });
        this.router.navigate(["/register"]);
      }
    });
  }
}
