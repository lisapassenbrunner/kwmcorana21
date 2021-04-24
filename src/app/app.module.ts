import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { VaccinationListComponent } from "./vaccination-list/vaccination-list.component";
import { VaccinationListItemComponent } from './vaccination-list-item/vaccination-list-item.component';
import { VaccinationDetailsComponent } from './vaccination-details/vaccination-details.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceListItemComponent } from './place-list-item/place-list-item.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, VaccinationListComponent, VaccinationListItemComponent, VaccinationDetailsComponent, PlaceListComponent, PlaceListItemComponent, PlaceDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
