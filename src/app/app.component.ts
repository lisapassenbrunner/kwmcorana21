import { Component, VERSION } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';
import { PersonFactory } from './shared/person-factory';
import { Vaccination } from './shared/vaccination';


@Component({
  selector: 'kwm-root',
  //aktuelle Komponente
  templateUrl: './app.component.html'
})
export class AppComponent {
  personAdmin = null;
  person = PersonFactory.empty();
  constructor(
    private authService: AuthenticationService,
    private kwm: AuthenticationService,
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

    if(this.personAdmin == "true"){
      return true;
    }else return false;
  }

}
