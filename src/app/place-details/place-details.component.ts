import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Place } from '../shared/place';
import { Vaccination } from '../shared/vaccination';

@Component({
  selector: 'kwm-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent{
  vaccinations: Vaccination[];
  places: Place[];
  @Output() showDetailsEvent = new EventEmitter<Vaccination>();
  @Input() vaccination: Vaccination

  // Detail View
  showDetails(vaccination: Vaccination, place:Place) {
    this.showDetailsEvent.emit(vaccination);
  }

  
  @Output() showListEvent = new EventEmitter<any>();

  showVaccinationList(){
    this.showListEvent.emit();
  }

  //Place
  
  @Input() place: Place
  @Output() showPlaceListEvent = new EventEmitter<any>();

  showPlaceList(){
    this.showPlaceListEvent.emit();
  }

  

}