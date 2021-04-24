import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vaccination } from '../shared/vaccination';
import { ActivatedRoute, Router } from "@angular/router";
import { VaccinationService } from '../shared/vaccination.service';

@Component({
  selector: 'kwm-vaccination-details',
  templateUrl: './vaccination-details.component.html',
  styleUrls: ['./vaccination-details.component.css']
})
export class VaccinationDetailsComponent  implements OnInit {
  vaccination: Vaccination;

  constructor(
    private kwm: VaccinationService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.vaccination = this.kwm.getSingle(params['description']);
  }

/*
  @Input() vaccination: Vaccination
  @Output() showListEvent = new EventEmitter<any>();

  showVaccinationList(){
    this.showListEvent.emit();
  }*/
}