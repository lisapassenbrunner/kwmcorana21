import { Component, Input, OnInit } from "@angular/core";
import { Vaccination } from "../shared/vaccination";

@Component({
  selector: "kwm-vaccination-list-item",
  templateUrl: "./vaccination-list-item.component.html",
  styleUrls: ["./vaccination-list-item.component.css"]
})
export class VaccinationListItemComponent implements OnInit {
  @Input() vaccination: Vaccination;

  ngOnInit() {}
}
