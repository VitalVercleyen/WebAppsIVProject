import { Injectable } from "@angular/core";

@Injectable()
export class ValidateService {
  constructor() {}

  validateRegister(user) {
    if (
      user.name == undefined ||
      user.username == undefined ||
      user.email == undefined ||
      user.password == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateSpelletje(spelletje) {
    if (
      spelletje.name == undefined ||
      spelletje.description == undefined ||
      spelletje.minimumAge == undefined ||
      spelletje.maximumAge == undefined ||
      spelletje.place == undefined ||
      spelletje.Duration == undefined ||
      spelletje.Players == undefined ||
      spelletje.creator == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

  validateAge(spelletje) {
    if (
      spelletje.minimumAge > spelletje.maximumAge ||
      spelletje.minimumAge < 0 ||
      spelletje.maximumAge < 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  validatePlayers(spelletje) {
    if (spelletje.players < 0) {
      return false;
    } else {
      return true;
    }
  }

  validateDuration(spelletje) {
    if (spelletje.Duration < 0) {
      return false;
    } else {
      return true;
    }
  }
}
