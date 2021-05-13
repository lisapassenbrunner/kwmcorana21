import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Vaccination } from "../shared/vaccination";
import { ActivatedRoute, Router } from "@angular/router";
import { VaccinationService } from "../shared/vaccination.service";
import { VaccinationFactory } from "../shared/vaccination-factory";
import { PeopleService } from "../shared/people.service";
import { Person } from "../shared/person";
import { PersonFactory } from "../shared/person-factory";
import { AuthenticationService } from "../shared/authentication.service";

@Component({
  selector: "kwm-vaccination-details",
  templateUrl: "./vaccination-details.component.html",
  styleUrls: ["./vaccination-details.component.css"]
})
export class VaccinationDetailsComponent implements OnInit {
  personAdmin = null;
  vaccination: Vaccination = VaccinationFactory.empty();
  person: Person = PersonFactory.empty();
  isRegistrated = false;
   SVNR = "";

  constructor(
    private kwm: VaccinationService,
    private kwm2: PeopleService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.SVNR = this.authService.getCurrentPersonSVNR();
    this.kwm2.getSingle(this.SVNR).subscribe(p => (this.person = p));
    const params = this.route.snapshot.params;
    this.kwm.getSingle(params["code"]).subscribe(b => (this.vaccination = b));



    

//noch anpassen
/*
    for (let person of this.vaccination.people){
      if (person.sv_nr == this.person.sv_nr){
        console.log(this.person.sv_nr);
        this.isRegistrated = true;
      }
    }

    console.log(this.person);
    */
  }

  removeVaccination() {
    if (confirm("Impfung wirklich löschen?")) {
      this.kwm
        .remove(this.vaccination.code)
        .subscribe(res =>
          this.router.navigate(["../"], { relativeTo: this.route })
        );
    }
  }

    isAdmin() {
      this.personAdmin = this.authService.getCurrentPersonAdmin();
    // this.kwm2.getSingle(this.personSVNR).subscribe(p => (this.person = p));

      if(this.personAdmin == "true"){
        return true;
      }else return false;
    }

  /*
  @Input() vaccination: Vaccination
  @Output() showListEvent = new EventEmitter<any>();

  showVaccinationList(){
    this.showListEvent.emit();
  }*/
}
