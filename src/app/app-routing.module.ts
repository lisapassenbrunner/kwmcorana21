import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VaccinationDetailsComponent } from "./vaccination-details/vaccination-details.component";
import { VaccinationListComponent } from "./vaccination-list/vaccination-list.component";
import { HomeComponent } from "./home/home.component";
import { VaccinationFormComponent } from "./vaccination-form/vaccination-form.component";
//import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import { PersonRegistrationDetailsComponent } from "./person-registration-details/person-registration-details.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "vaccinations", component: VaccinationListComponent },
  { path: "vaccinations/:code", component: VaccinationDetailsComponent },
  { path: "admin", component: VaccinationFormComponent},
  { path: "admin/:code", component: VaccinationFormComponent},
  //{ path: "registration", component: RegistrationFormComponent},
  { path: "registrations", component: PersonListComponent},
  { path: "registrations/:sv_nr", component: PersonRegistrationDetailsComponent },
  { path: "profile", component: PersonDetailsComponent},
  { path: "registration/:sv_nr/:code", component: RegistrationFormComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
