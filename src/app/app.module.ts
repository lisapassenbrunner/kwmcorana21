import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { VaccinationListComponent } from "./vaccination-list/vaccination-list.component";
import { VaccinationListItemComponent } from "./vaccination-list-item/vaccination-list-item.component";
import { VaccinationDetailsComponent } from "./vaccination-details/vaccination-details.component";
import { VaccinationService } from "./shared/vaccination.service";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { VaccinationFormComponent } from "./vaccination-form/vaccination-form.component";
import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeDEAT from "@angular/common/locales/de-AT";
import { PersonListComponent } from './person-list/person-list.component';
import { PeopleService } from './shared/people.service';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonRegistrationDetailsComponent } from './person-registration-details/person-registration-details.component';
import { PersonListItemComponent } from './person-list-item/person-list-item.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { JwtInterceptorService } from './shared/jwt-interceptor.service';

registerLocaleData(localeDEAT);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    VaccinationListComponent,
    VaccinationListItemComponent,
    VaccinationDetailsComponent,
    HomeComponent,
    VaccinationFormComponent,
    PersonListComponent,
    PersonDetailsComponent,
    PersonRegistrationDetailsComponent,
    PersonListItemComponent,
    RegistrationFormComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [VaccinationService, PeopleService, AuthenticationService, TokenInterceptorService, { provide: LOCALE_ID, useValue: "de-at" }, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}]
})
export class AppModule {}
