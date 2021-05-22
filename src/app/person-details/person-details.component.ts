import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { PeopleService } from '../shared/people.service';
import { Person } from '../shared/person';
import { PersonFactory } from '../shared/person-factory';

@Component({
  selector: 'kwm-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  SVNR = "";
  person: Person = PersonFactory.empty();

  constructor(
    private authService: AuthenticationService,
    private kwm: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.SVNR = this.authService.getCurrentPersonSVNR();
    this.kwm.getSingle(this.SVNR).subscribe(p => (this.person = p));
  }
}