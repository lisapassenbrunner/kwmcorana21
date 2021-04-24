import { Component, Input, OnInit } from "@angular/core";
import { Place } from "../shared/place";
import { Vaccination } from "../shared/vaccination";

@Component({
  selector: "a.kwm-place-list-item",
  templateUrl: "./place-list-item.component.html",
  styleUrls: ["./place-list-item.component.css"]
})
export class PlaceListItemComponent implements OnInit {
  @Input() place: Place;
  @Input() vaccination: Vaccination;
  constructor() {}

  ngOnInit() {}
}
