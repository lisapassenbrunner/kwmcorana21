import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../shared/people.service';
import { Person } from '../shared/person';
import { PersonFactory } from '../shared/person-factory';
import { Vaccination } from '../shared/vaccination';
import { VaccinationFactory } from '../shared/vaccination-factory';
import { VaccinationService } from '../shared/vaccination.service';

@Component({
  selector: 'kwm-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  person: Person = PersonFactory.empty();
  vaccination: Vaccination = VaccinationFactory.empty();

  constructor(
    private kwm: PeopleService,
    private kwm2: VaccinationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //hier muss svnr noch mitgegeben werden, nachdem eingeloggt
  
    const params = this.route.snapshot.params;
    this.kwm.getSingle("3121").subscribe(p => (this.person = p));
    
  //  let vaccination_code = this.person.vaccination_id
    console.log(this.person);
  //  this.kwm2.getSingleVaccination(vaccination_code).subscribe(p => (this.vaccination = p));

      console.log(this.person);
  }


}