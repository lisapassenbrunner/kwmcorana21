import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl
} from '@angular/forms';
import { VaccinationFactory } from '../shared/vaccination-factory';
import { VaccinationService } from '../shared/vaccination.service';
import { Vaccination } from '../shared/vaccination';
import { VaccinationFormErrorMessages } from './vaccination-form-error-messages';

@Component({
  selector: 'kwm-vaccination-form',
  templateUrl: './vaccination-form.component.html',
  styleUrls: ['./vaccination-form.component.css']
})
export class VaccinationFormComponent implements OnInit {
  vaccinationForm: FormGroup;
  vaccination = VaccinationFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingVaccination = false;
  places: FormArray;

  constructor(
    private fb: FormBuilder,
    private kwm: VaccinationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const code = this.route.snapshot.params['code'];
    if (code) {
      this.isUpdatingVaccination = true;
      this.kwm.getSingle(code).subscribe(vaccination => {
        this.vaccination = vaccination;
        this.initVaccination();
      });
    }

    this.initVaccination();
  }

  initVaccination() {
    this.buildPlacesArray();
    this.vaccinationForm = this.fb.group({
      id: this.vaccination.id,
      description: [this.vaccination.description, Validators.required],
      vaccine: this.vaccination.vaccine,
      code: [
        this.vaccination.code,
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)]
      ],
      time: this.vaccination.time,
      max_registrations: [
        this.vaccination.max_registrations,
        [Validators.required, Validators.min(5), Validators.max(15)]
      ],
      registrations: this.vaccination.registrations,
      places: this.places,
      date: this.vaccination.date
    });

    this.vaccinationForm.statusChanges.subscribe(() =>
      this.updateErrorMessages()
    );
  }

  buildPlacesArray() {
   
    this.places = this.fb.array([]);
    for (let place of this.vaccination.place) {
      let fg = this.fb.group({
        id: new FormControl(place.id),
        title: new FormControl(place.title, [Validators.required]),
        plz: new FormControl(place.plz, [Validators.required]),
        place: new FormControl(place.place, [Validators.required]),
        street: new FormControl(place.street, [Validators.required]),
        number: new FormControl(place.number, [Validators.required]),
        district: new FormControl(place.district, [Validators.required])
      });
      this.places.push(fg);
    }
  }

  addPlaceControl() {
    this.places.push(
      this.fb.group({
        title: null,
        plz: null,
        place: null,
        street: null,
        number: null,
        district: null
      })
    );
  }

  submitForm() {
    // filter empty values
    /*this.vaccinationForm.value.places = this.vaccinationForm.value.places.filter(
      thumbnail => thumbnail.url*/
    //);

    const vaccination: Vaccination = VaccinationFactory.fromObject(
      this.vaccinationForm.value
    );
    //deep copy - did not work without??
    vaccination.place = this.vaccinationForm.value.places;
    console.log(vaccination);
    //just copy the authors
    //vaccination.people = this.vaccination.people;
    if (this.isUpdatingVaccination) {
      this.kwm.update(vaccination).subscribe(res => {
        this.router.navigate(['../../vaccinations', vaccination.code], {
          relativeTo: this.route
        });
      });
    } else {
      //vaccination.user_id = 1; // jsut for testing
      // console.log(vaccination);
      this.kwm.create(vaccination).subscribe(res => {
        this.vaccination = VaccinationFactory.empty();
        this.vaccinationForm.reset(VaccinationFactory.empty());
        this.router.navigate(['../vaccinations'], { relativeTo: this.route });
      });
    }
  }
  updateErrorMessages() {
    console.log('Is invalid? ' + this.vaccinationForm.invalid);

    this.errors = {};
    for (const message of VaccinationFormErrorMessages) {
      const control = this.vaccinationForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}
