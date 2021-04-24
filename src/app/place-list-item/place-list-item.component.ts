import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../shared/place';

@Component({
  selector: 'kwm-place-list-item',
  templateUrl: './place-list-item.component.html',
  styleUrls: ['./place-list-item.component.css']
})
export class PlaceListItemComponent implements OnInit {
  @Input() place: Place;
  constructor() { }

  ngOnInit() {
  }

}