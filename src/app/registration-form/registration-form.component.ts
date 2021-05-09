import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  vaccination: Vaccination = VaccinationFactory.empty();

  constructor(
    private kwm: VaccinationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
   // console.log(this.vaccination);
    const params = this.route.snapshot.params;
    console.log(params["code"]);
    this.kwm.getSingle(params["code"]).subscribe(b => (this.vaccination = b));
  }
}