import { Component, VERSION } from "@angular/core";
import { Place } from "./shared/place";
import { Vaccination } from "./shared/vaccination";

@Component({
  selector: "kwm-root",
  // hier wird die Komponente vaccination-list aufgerufen
  //welche Ansicht soll gerade aktiv sein
  template: `
    <kwm-place-list *ngIf="placeListOn" (showPlaceDetailsEvent)="showPlaceDetails($event)"></kwm-place-list>
    <kwm-place-details
      *ngIf="placeDetailsOn"
      [place]="place" (showPlaceListEvent)="showPlaceList()"
    ></kwm-place-details>
    <kwm-vaccination-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></kwm-vaccination-list>
    <kwm-vaccination-details
      *ngIf="detailsOn"
      [vaccination]="vaccination" (showListEvent)="showList()"
    ></kwm-vaccination-details>
  `
})
export class AppComponent {
  listOn = false;
  detailsOn = false;
  placeListOn = true;
  placeDetailsOn = false;

  vaccination: Vaccination;

  //Events abfangen zur Anzeige der zwei Views
  showList() {
    this.listOn = true;
    this.detailsOn = false;
    this.placeListOn = false;
    this.placeDetailsOn = false;
  }

  showDetails(vaccination: Vaccination) {
    this.vaccination = vaccination;
    this.listOn = false;
    this.detailsOn = true;
    this.placeListOn = false;
    this.placeDetailsOn = false;
  }

  showPlaceList(){
    this.placeListOn = true;
    this.placeDetailsOn = false;
    this.detailsOn = false;
    this.listOn = false;
  }

  showPlaceDetails(place: Place){
    this.placeDetailsOn = true;
    this.placeListOn = false;
    this.detailsOn = false;
    this.listOn = false;
  }
}
