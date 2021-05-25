import { assertNotNull } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { PeopleService } from '../shared/people.service';
import { Person } from '../shared/person';
import { PersonFactory } from '../shared/person-factory';
import { Vaccination } from '../shared/vaccination';
import { VaccinationFactory } from '../shared/vaccination-factory';
import { VaccinationService } from '../shared/vaccination.service';

@Component({
  selector: 'kwm-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  isRegistrating = false;
  vaccination: Vaccination = VaccinationFactory.empty();
  person = PersonFactory.empty();
  places: FormArray;
  people: FormArray;
  SVNR = "";

  constructor(
    private fb: FormBuilder,
    private kwm: VaccinationService,
    private kwm2: PeopleService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.kwm.getSingle(params['code']).subscribe(vaccination => {
      this.vaccination = vaccination;
    });

    this.SVNR = this.authService.getCurrentPersonSVNR();
    this.kwm2.getSingle(this.SVNR).subscribe(person => {
      this.person = person;
    });
  }

  updateRegistration() {
    this.person.vaccination_id = this.vaccination.id;
    this.vaccination['people'].push(this.person);

    

    this.kwm.updateRegistration(this.vaccination).subscribe(res => {
      this.router.navigate(['../../vaccinations', this.vaccination.code], {
        relativeTo: this.route
      });
    });
  }
}
