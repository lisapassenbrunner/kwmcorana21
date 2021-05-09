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
      //console.log(this.vaccination["people"]);
    });

    this.kwm2.getSingle('3121').subscribe(person => {
      this.person = person;
      this.initPerson();
      //console.log(this.person);
    });
  }

  initPerson() {
    this.buildPeopleArray();
    this.buildPlacesArray();
    console.log(this.people);

    // this.buildPeopleArray();
    this.registrationForm = this.fb.group({
      vaccination_id: this.vaccination.id,
      description: this.vaccination.description,
      vaccine: this.vaccination.vaccine,
      code: this.vaccination.code,
      time: this.vaccination.time,
      max_registrations: this.vaccination.max_registrations,
      registrations: this.vaccination.registrations,
      places: this.places,
      people: this.person,
      date: this.vaccination.date
    });
    //  console.log(this.registrationForm);

    // this.people.push(array);
    //this.people.push(fg);
  }

  buildPlacesArray() {
    this.places = this.fb.array([]);
    for (let place of this.vaccination.place) {
      let fg = this.fb.group({
        id: new FormControl(place.id),
        title: new FormControl(place.title),
        plz: new FormControl(place.plz),
        place: new FormControl(place.place),
        street: new FormControl(place.street),
        number: new FormControl(place.number),
        district: new FormControl(place.district)
      });
      this.places.push(fg);
    }
  }

  buildPeopleArray() {
    //neue Person anhängen
    this.vaccination['people'].push(this.person);
  //  console.log(this.vaccination['people']);

    this.people = this.fb.array([]);
    for (let person of this.vaccination.people) {
      //console.log(person.id);
      let fg = this.fb.group({
        id: new FormControl(person.id),
        sv_nr: new FormControl(person.sv_nr),
        firstName: new FormControl(person.firstName),
        lastName: new FormControl(person.lastName),
        gender: new FormControl(person.gender),
        dateOfBirth: new FormControl(person.dateOfBirth),
        email: new FormControl(person.email),
        phoneNumber: new FormControl(person.phoneNumber)
      });
      this.people.push(fg);
      console.log(this.people);
    }
  }

  addPeopleControl() {
    this.people.push(
      this.fb.group({
        id: null,
        sv_nr: null,
        firstName: null,
        lastName: null,
        gender: null,
        dateOfBirth: null,
        email: null,
        phoneNumber: null
      })
    );
  }

  submitForm() {
    const vaccination: Vaccination = VaccinationFactory.fromObject(
      this.registrationForm.value
    );
    vaccination.people = this.registrationForm.value.people;
    console.log(this.vaccination);

    this.kwm.updateRegistration(vaccination).subscribe(res => {
      this.router.navigate(['../../vaccinations', vaccination.code], {
        relativeTo: this.route
      });
    });

    // person.vaccination = this.vaccination;
  }
}
