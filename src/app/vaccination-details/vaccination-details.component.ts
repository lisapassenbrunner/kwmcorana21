import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Place } from '../shared/place';
import { Vaccination } from '../shared/vaccination';

@Component({
  selector: 'kwm-vaccination-details',
  templateUrl: './vaccination-details.component.html',
  styleUrls: ['./vaccination-details.component.css']
})
export class VaccinationDetailsComponent  {

  @Input() vaccination: Vaccination
  @Input() place: Place
  @Output() showListEvent = new EventEmitter<any>();
  @Output() showPlaceDetailsEvent = new EventEmitter<any>();

  showVaccinationList(){
    this.showListEvent.emit();
  }

  showPlaceDetails(place:Place){
    console.log("yea");
    this.showPlaceDetailsEvent.emit();
  }
}