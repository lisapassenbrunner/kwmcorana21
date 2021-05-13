import { Component, VERSION } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';
import { PeopleService } from './shared/people.service';
import { PersonFactory } from './shared/person-factory';
import { Vaccination } from './shared/vaccination';
import { VaccinationService } from './shared/vaccination.service';

@Component({
  selector: 'kwm-root',
  // hier wird die Komponente vaccination-list aufgerufen
  //welche Ansicht soll gerade aktiv sein
  templateUrl: './app.component.html'
})
export class AppComponent {
  personAdmin = null;
  person = PersonFactory.empty();
  constructor(
    private authService: AuthenticationService,
    private kwm: AuthenticationService,
    private kwm2: PeopleService
  ) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
   
  }
  getLoginLabel() {
    if (this.isLoggedIn()) {
      return 'Logout';
    } else {
      return 'Login';
    }
  }

  isAdmin() {
    this.personAdmin = this.kwm.getCurrentPersonAdmin();
   // this.kwm2.getSingle(this.personSVNR).subscribe(p => (this.person = p));


    if(this.personAdmin == "true"){
      return true;
    }else return false;
  }

  listOn = true;
  detailsOn = false;

  vaccination: Vaccination;

  //Events abfangen zur Anzeige der zwei Views
  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(vaccination: Vaccination) {
    this.vaccination = vaccination;
    this.listOn = false;
    this.detailsOn = true;
  }
}
