import { assertNotNull } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  //@Input() vaccination: Vaccination;
  registrationForm: FormGroup;
  isRegistrating = false;
  vaccination: Vaccination = VaccinationFactory.empty();
  person = PersonFactory.empty();
  places: FormArray;
  people: FormArray;

  constructor(
    private fb: FormBuilder,
    private kwm: VaccinationService,
    private kwm2: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log(this.vaccination);
    const params = this.route.snapshot.params;
    console.log(params['code']);
    this.kwm.getSingle(params['code']).subscribe(vaccination => {
      this.vaccination = vaccination;
    });

    this.kwm2.getSingle('3121').subscribe(person => {
      this.person = person;
 
    }); 
  }


  updateRegistration() {
    this.vaccination['people'].push(this.person);
    console.log(this.person);

    this.kwm.updateRegistration(this.vaccination).subscribe(res => {
      this.router.navigate(['../../vaccinations', this.vaccination.code], {
        relativeTo: this.route
      });
    });
  }
}
