import { Component, VERSION } from "@angular/core";
import { Vaccination } from "./shared/vaccination";

@Component({
  selector: "kwm-root",
  // hier wird die Komponente vaccination-list aufgerufen
  //welche Ansicht soll gerade aktiv sein
  template: `
    <kwm-vaccination-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></kwm-vaccination-list>
    <kwm-vaccination-details
      *ngIf="detailsOn"
      [vaccination]="vaccination" (showListEvent)="showList()"
    ></kwm-vaccination-details>
  `
})
export class AppComponent {
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
