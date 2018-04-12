import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { tokenNotExpired } from "angular2-jwt";

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  username: String;
  nameSpelletje: any;
  searchParam: any;

  constructor(private http: Http) {}

  registerUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/users/register", user, { headers: headers })
      .map(res => res.json());
  }

  getAllUserNames() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/getAllUserNames", {
        headers: headers
      })
      .map(res => res.json());
  }

  saveSpelletje(spelletje) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/spelletjes/save", spelletje, {
        headers: headers
      })
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/users/authenticate", user, {
        headers: headers
      })
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append("Authorization", this.authToken);
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/users/profile", {
        headers: headers
      })
      .map(res => res.json());
  }

  getSpelletjes() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http
      .get("http://localhost:3000/spelletjes/getSpelletjes", {
        headers: headers
      })
      .map(res => res.json());
  }

  getUserSpelletjes() {
    let headers = new Headers();
    this.loadUser();
    console.log(this.username);
    headers.append("Content-Type", "application/json");
    return this.http
      .get(
        "http://localhost:3000/spelletjes/getSpelletjeOnUsername/" +
          this.username.toLowerCase(),
        {
          headers: headers
        }
      )
      .map(res => res.json());
  }

  getSelectedSpelletje() {
    let headers = new Headers();
    this.loadSelectedSpelletje();
    headers.append("Content-Type", "application/json");
    return this.http
      .get(
        "http://localhost:3000/spelletjes/getSpelletjeOnName/" +
          this.nameSpelletje,
        {
          headers: headers
        }
      )
      .map(res => res.json());
  }

  getSpelletjeLike() {
    let headers = new Headers();
    this.loadSearchParam();
    headers.append("Content-type", "application/json");
    return this.http
      .get(
        "http://localhost:3000/spelletjes/getSpelletjeLike/" + this.searchParam,
        {
          headers: headers
        }
      )
      .map(res => res.json());
  }
  getRandomSpelletje() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/spelletjes/getRandomSpelletje", {
        headers: headers
      })
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("username", user.username);
    this.authToken = token;
    this.user = user;
    this.username = user.username;
  }

  loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }

  loadUser() {
    const user = localStorage.getItem("user");
    const username = localStorage.getItem("username");
    this.user = user;
    this.username = username;
  }

  loggedIn() {
    return tokenNotExpired("id_token");
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  storeSelectedSpelletje(name) {
    localStorage.setItem("selectedSpelletje", name);
    this.nameSpelletje = name;
  }

  loadSelectedSpelletje() {
    const spelletjeName = localStorage.getItem("selectedSpelletje");
    this.nameSpelletje = spelletjeName;
  }

  storeSearchParam(param) {
    localStorage.setItem("searchParam", param);
    this.searchParam = param;
  }
  loadSearchParam() {
    const searchParam = localStorage.getItem("searchParam");
    this.searchParam = searchParam;
  }

  getSearchParam() {
    return this.searchParam;
  }
}
