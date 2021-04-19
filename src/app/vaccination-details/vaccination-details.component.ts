import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vaccination } from '../shared/vaccination';

@Component({
  selector: 'kwm-vaccination-details',
  templateUrl: './vaccination-details.component.html',
  styleUrls: ['./vaccination-details.component.css']
})
export class VaccinationDetailsComponent  {

  @Input() vaccination: Vaccination
  @Output() showListEvent = new EventEmitter<any>();

  showVaccinationList(){
    this.showListEvent.emit();
  }
}