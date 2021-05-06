import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { PeopleService } from "../shared/people.service";
import { PersonFactory } from "../shared/person-factory";
import { Vaccination } from "../shared/vaccination";
import { VaccinationFactory } from "../shared/vaccination-factory";
import { VaccinationService } from "../shared/vaccination.service";

@Component({
  selector: "kwm-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"]
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  isRegistrating = false;
  person = PersonFactory.empty();
  vaccination: Vaccination =  VaccinationFactory.empty();

  constructor(
    private fb: FormBuilder,
    private kwm: PeopleService,
    private kwm2: VaccinationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //const sv_nr = this.route.snapshot.params["sv_nr"];
    //if (sv_nr) {
    this.isRegistrating = true;
    const params = this.route.snapshot.params;
    console.log(params["code"]);
    this.kwm2.getSingle(params["code"]).subscribe(vaccination => {
      this.vaccination = vaccination;
    });

    this.kwm.getSingle("3121").subscribe(person => {
      this.person = person;
      this.initPerson();
      console.log(this.person);
    });
    //  }
    //this.initPerson();
  }

  initPerson() {
    this.registrationForm = this.fb.group({
      sv_nr: this.person.sv_nr,
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      gender: this.person.gender,
      dateOfBirth: this.person.dateOfBirth,
      email: this.person.email,
      phoneNumber: this.person.phoneNumber
    });
  }

  submitForm() {
    return null;
  }
}
