import { Component, Input, OnInit } from '@angular/core';
import { Vaccination } from '../shared/vaccination';

@Component({
  selector: 'kwm-vaccination-details',
  templateUrl: './vaccination-details.component.html',
  styleUrls: ['./vaccination-details.component.css']
})
export class VaccinationDetailsComponent implements OnInit {

  @Input() vaccination: Vaccination
  

  ngOnInit() {
  }

}