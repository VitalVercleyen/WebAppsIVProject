import { Component, Input, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit() {}
}
