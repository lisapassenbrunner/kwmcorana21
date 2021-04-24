import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Place } from '../shared/place';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent{

  @Input() place: Place
  @Output() showPlaceListEvent = new EventEmitter<any>();

  showPlaceList(){
    this.showPlaceListEvent.emit();
  }

}