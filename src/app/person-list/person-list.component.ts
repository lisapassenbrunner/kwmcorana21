import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/people.service';
import { Person } from '../shared/person';

@Component({
  selector: 'kwm-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  people: Person[];
  constructor(private kwm: PeopleService) { }

  ngOnInit() {
    this.kwm.getAll().subscribe(res => this.people = res);
  }

}
