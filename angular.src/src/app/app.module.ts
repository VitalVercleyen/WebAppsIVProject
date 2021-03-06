import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SpelletjesComponent } from "./components/spelletjes/spelletjes.component";

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { FlashMessagesModule } from "angular2-flash-messages";
import { AuthGuard } from "./guards/auth.guard";
import { FooterComponent } from "./components/footer/footer.component";
import { SpelletjesLijstComponent } from "./components/spelletjes-lijst/spelletjes-lijst.component";
import { SpelletjeComponent } from "./components/spelletje/spelletje.component";
import { SpelletjeDetailComponent } from "./components/spelletje-detail/spelletje-detail.component";
import { SpelletjesSearchResultComponent } from "./components/spelletjes-search-result/spelletjes-search-result.component";
import { WillekeurigSpelletjeComponent } from "./components/willekeurig-spelletje/willekeurig-spelletje.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: "spelletjes",
    component: SpelletjesComponent
  },
  {
    path: "spelletjesLijst",
    component: SpelletjesLijstComponent
  },
  {
    path: "spelletjesDetail",
    component: SpelletjeDetailComponent
  },
  {
    path: "spelletjesSearchResult",
    component: SpelletjesSearchResultComponent
  },
  {
    path: "willekeurigSpelletje",
    component: WillekeurigSpelletjeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    SpelletjesComponent,
    FooterComponent,
    SpelletjesLijstComponent,
    SpelletjeComponent,
    SpelletjeDetailComponent,
    SpelletjesSearchResultComponent,
    WillekeurigSpelletjeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
