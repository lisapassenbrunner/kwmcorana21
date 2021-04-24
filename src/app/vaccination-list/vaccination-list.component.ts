import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Person } from "../shared/person";
import { Place } from "../shared/place";
import { Vaccination } from "../shared/vaccination";
import { VaccinationService } from "../shared/vaccination.service";

@Component({
  selector: "kwm-vaccination-list",
  templateUrl: "./vaccination-list.component.html",
  styleUrls: ["./vaccination-list.component.css"]
})
export class VaccinationListComponent implements OnInit {
  vaccinations: Vaccination[];

  @Output() showDetailsEvent = new EventEmitter<Vaccination>();

  constructor(private kwm: VaccinationService){}

  ngOnInit() {
    //service
    this.vaccinations = this.kwm.getAll();
  }

  // Detail View
  showDetails(vaccination: Vaccination) {
    this.showDetailsEvent.emit(vaccination);
  }
}
