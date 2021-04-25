import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Vaccination } from "../shared/vaccination";
import { ActivatedRoute, Router } from "@angular/router";
import { VaccinationService } from "../shared/vaccination.service";
import { VaccinationFactory } from "../shared/vaccination-factory";

@Component({
  selector: "kwm-vaccination-details",
  templateUrl: "./vaccination-details.component.html",
  styleUrls: ["./vaccination-details.component.css"]
})
export class VaccinationDetailsComponent implements OnInit {
  vaccination: Vaccination = VaccinationFactory.empty();

  constructor(
    private kwm: VaccinationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.kwm.getSingle(params['description']).subscribe(v => this.vaccination = v);
  }

  removeVaccination() {
    if (confirm("Impfung wirklich löschen?")) {
      this.kwm
        .remove(this.vaccination.id)
        .subscribe(res =>
          this.router.navigate(["../"], { relativeTo: this.route })
        );
    }
  }

  /*
  @Input() vaccination: Vaccination
  @Output() showListEvent = new EventEmitter<any>();

  showVaccinationList(){
    this.showListEvent.emit();
  }*/
}
