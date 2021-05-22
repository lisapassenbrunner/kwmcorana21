import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vaccination } from '../shared/vaccination';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationService } from '../shared/vaccination.service';
import { VaccinationFactory } from '../shared/vaccination-factory';
import { PeopleService } from '../shared/people.service';
import { Person } from '../shared/person';
import { PersonFactory } from '../shared/person-factory';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'kwm-vaccination-details',
  templateUrl: './vaccination-details.component.html',
  styleUrls: ['./vaccination-details.component.css']
})
export class VaccinationDetailsComponent implements OnInit {
  personAdmin = null;
  vaccination: Vaccination = VaccinationFactory.empty();
  person: Person = PersonFactory.empty();
  isRegistrated = false;
  SVNR = '';

  constructor(
    private kwm: VaccinationService,
    private kwm2: PeopleService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.SVNR = this.authService.getCurrentPersonSVNR();
    this.kwm2.getSingle(this.SVNR).subscribe(p => (this.person = p));
    const params = this.route.snapshot.params;
    this.kwm.getSingle(params['code']).subscribe(b => (this.vaccination = b));
  }

  removeVaccination() {
    if (confirm('Impfung wirklich löschen?')) {
      this.kwm
        .remove(this.vaccination.code)
        .subscribe(res =>
          this.router.navigate(['../'], { relativeTo: this.route })
        );
    }
  }

  isAdmin() {
    this.personAdmin = this.authService.getCurrentPersonAdmin();
    if (this.personAdmin == 'true') {
      return true;
    } else return false;
  }
}
