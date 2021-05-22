import { Component, Input, OnInit } from "@angular/core";
import { Place } from "../shared/place";
import { Vaccination } from "../shared/vaccination";

@Component({
  selector: "a.kwm-vaccination-list-item",
  templateUrl: "./vaccination-list-item.component.html",
  styleUrls: ["./vaccination-list-item.component.css"]
})
export class VaccinationListItemComponent implements OnInit {
  @Input() vaccination: Vaccination;
  currentDate = new Date();

  ngOnInit() {
   
 
  }
}

