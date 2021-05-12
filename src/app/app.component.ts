import { Component, VERSION } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';
import { Vaccination } from './shared/vaccination';

@Component({
  selector: 'kwm-root',
  // hier wird die Komponente vaccination-list aufgerufen
  //welche Ansicht soll gerade aktiv sein
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private authService: AuthenticationService) {}
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
