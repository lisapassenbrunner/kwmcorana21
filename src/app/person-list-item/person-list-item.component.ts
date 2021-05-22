import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../shared/person';

@Component({
  selector: 'a.kwm-person-list-item',
  templateUrl: './person-list-item.component.html',
  styleUrls: ['./person-list-item.component.css']
})
export class PersonListItemComponent implements OnInit {
  @Input() person: Person;

  ngOnInit() {}
}
