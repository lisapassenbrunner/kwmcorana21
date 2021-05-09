import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../shared/people.service';
import { Person } from '../shared/person';
import { PersonFactory } from '../shared/person-factory';
import { Vaccination } from '../shared/vaccination';

@Component({
  selector: 'kwm-person-registration-details',
  templateUrl: './person-registration-details.component.html',
  styleUrls: ['./person-registration-details.component.css']
})
export class PersonRegistrationDetailsComponent implements OnInit {

  
  person: Person = PersonFactory.empty();

  constructor(
    private kwm: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.kwm.getSingle(params["sv_nr"]).subscribe(p => (this.person = p));
  }

  checkVaccination(sv_nr) {
   // for (let person of this.person) {
      if (this.person.sv_nr == sv_nr) {
        if (this.person.vaccinated == false) {
          this.person.vaccinated = true;
        } else this.person.vaccinated = false;
        console.log(this.person);
        this.kwm.update(this.person).subscribe();
      }
    //}
  }

}